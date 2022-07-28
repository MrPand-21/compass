//@ts-nocheck
import { Db, MongoClient, ObjectId } from "mongodb";
import { Logger } from "@core/logger/winston.logger";

const logger = Logger("app:mongo.service");

const uri = process.env["MONGO_URI"] || "mongodb://localhost:27017/";
const dbName = process.env["DB_NAME"] || "test";

class MongoService {
  private count = 0;
  private options = {
    useNewUrlParser: true,
  };
  public client: MongoClient | undefined;
  public db!: Db;

  constructor() {
    this._connect();
  }

  _connect = () => {
    logger.debug("Attempting MongoDB connection");
    MongoClient.connect(uri, this.options)
      .then((clientInstance) => {
        logger.debug(`Connected to '${dbName}' database`);
        this.client = clientInstance;
        this.db = this.client.db(dbName);
        this.db["ObjectId"] = ObjectId;
      })
      .catch((err) => {
        const retrySeconds = 5;
        logger.warn(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this._connect, retrySeconds * 1000);
      });
  };

  isConnected = () => this.client !== undefined;

  objectId = (id: string): ObjectId => {
    return new ObjectId(id);
  };

  recordExists = async (collection: string, filter: object) => {
    const r = await this.db.collection(collection).findOne(filter);
    return r !== null;
  };
}

export default new MongoService();
