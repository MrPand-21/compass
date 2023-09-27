export const gcalCalendarList = {
  kind: "calendar#calendarList",
  etag: '"p32g9nb5bt6fva0g"',
  nextSyncToken: "CKCbrKvpn_UCEhh0eWxlci5oaXR6ZW1hbkBnbWFpbC5jb20=",
  items: [
    {
      kind: "calendar#calendarListEntry",
      etag: '"1410033886545000"',
      id: "p#weather@group.v.calendar.google.com",
      summary: "Weather",
      description: "Daily weather forecast for your location",
      timeZone: "America/Chicago",
      colorId: "7",
      backgroundColor: "#42d692",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "reader",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1584898445541000"',
      id: "cd43evntemvclci6hoe806hmdo@group.calendar.google.com",
      summary: "Holiday & Travel",
      timeZone: "America/Chicago",
      colorId: "7",
      backgroundColor: "#20f59e",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "owner",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1598026641340000"',
      id: "1cgehsm0iuibloe9ntag9l60sk@group.calendar.google.com",
      summary: "Finances",
      timeZone: "America/Chicago",
      colorId: "8",
      backgroundColor: "#16a765",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "owner",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1601003001818000"',
      id: "addressbook#contacts@group.v.calendar.google.com",
      summary: "Birthdays",
      description:
        "Displays birthdays, anniversaries, and other event dates of people in Google Contacts.",
      timeZone: "America/Chicago",
      summaryOverride: "Contacts",
      colorId: "1",
      backgroundColor: "#5e5b54",
      foregroundColor: "#ffffff",
      selected: true,
      accessRole: "reader",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1607567992908000"',
      id: "49q3td7e05uiffvnm4kb67i2hc@group.calendar.google.com",
      summary: "Location",
      description: "Where I'm at when",
      timeZone: "America/Chicago",
      colorId: "21",
      backgroundColor: "#cca6ac",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "owner",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1609353109142000"',
      id: "en.usa#holiday@group.v.calendar.google.com",
      summary: "Holidays in United States",
      description: "Holidays and Observances in United States",
      timeZone: "America/Chicago",
      colorId: "16",
      backgroundColor: "#4986e7",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "reader",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1616105848268000"',
      id: "hc7a7nqfoje5u61pdedt4ogil8@group.calendar.google.com",
      summary: "Acuity",
      timeZone: "America/Denver",
      summaryOverride: "Coaching",
      colorId: "18",
      backgroundColor: "#b99aff",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "reader",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1616105848842000"',
      id: "bar@gmail.com",
      summary: "Commitments",
      timeZone: "America/Chicago",
      summaryOverride: "Commitments",
      colorId: "18",
      backgroundColor: "#b99aff",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "reader",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1638246533138000"',
      id: "foo@gmail.com",
      summary: "Switchback",
      timeZone: "America/Chicago",
      colorId: "16",
      backgroundColor: "#4986e7",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "owner",
      defaultReminders: [],
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
    {
      kind: "calendar#calendarListEntry",
      etag: '"1640113725386000"',
      id: "foo@gmail.com",
      summary: "*Miscellaneous*",
      timeZone: "America/Chicago",
      colorId: "14",
      backgroundColor: "#9fe1e7",
      foregroundColor: "#000000",
      selected: true,
      accessRole: "owner",
      defaultReminders: [
        {
          method: "popup",
          minutes: 30,
        },
        {
          method: "email",
          minutes: 30,
        },
      ],
      notificationSettings: {
        notifications: [
          {
            type: "eventCreation",
            method: "email",
          },
          {
            type: "eventChange",
            method: "email",
          },
          {
            type: "eventCancellation",
            method: "email",
          },
          {
            type: "eventResponse",
            method: "email",
          },
        ],
      },
      primary: true,
      conferenceProperties: {
        allowedConferenceSolutionTypes: ["hangoutsMeet"],
      },
    },
  ],
};
