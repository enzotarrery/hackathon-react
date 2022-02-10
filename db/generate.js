const fs = require("fs");
const { sensitiveHeaders } = require("http2");
const casual = require("casual").fr_FR;
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// La liste des lieux et de leurs positions
const places = [
  {
    name: "Place de Verdun",
    position: [46.16284, -1.15276],
  },
  {
    name: "Intermarché Lafond",
    position: [46.17469, -1.14617],
  },
  {
    name: "École de Rompsay",
    position: [46.16802, -1.11183],
  },
  {
    name: "Piscine municipale Fétilly",
    position: [46.17133, -1.15134],
  },
  {
    name: "Place du marché La Pallice",
    position: [46.16157, -1.20481],
  },
  {
    name: "Parking Notre Dame Centre Ville",
    position: [46.16416, -1.14586],
  },
  {
    name: "Église de Tasdon",
    position: [46.14861, -1.14438],
  },
  {
    name: "Casino du Mail",
    position: [46.15561, -1.16644],
  },
  {
    name: "Collège Pierre Mendès France Mireuil",
    position: [46.16921, -1.17851],
  },
  {
    name: "Porte Royale",
    position: [46.16226, -1.14344],
  },
  {
    name: "Lycée Valin",
    position: [46.15553, -1.13706],
  },
  {
    name: "Cimetière de Saint Éloi",
    position: [46.16298, -1.13261],
  },
  {
    name: "Saint-Maurice",
    position: [46.16489, -1.17402],
  },
  {
    name: "Rue de Jéricho",
    position: [46.16654, -1.1595],
  },
  {
    name: "Aéroport Laleu",
    position: [46.17517, -1.19408],
  },
  {
    name: "Technoforum",
    position: [46.14809, -1.15572],
  },
];

// Quelques réglages...
const settings = {
  outputPath: "db/db.json",
  usersLength: 50,
  instructorsLength: 10,
  placesLength: places.length,
  sessionsLength: 100,
  maxFavoritePlaces: 5,
  maxFavoriteInstructors: 3,
  tchatLength: 10,
};

// On définit le générateur pour un utilisateur
casual.define("user", (id, role) => {
  return {
    id,
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    password: casual.password,
    favoritePlacesId: Array(casual.integer(0, settings.maxFavoritePlaces - 1))
      .fill(null)
      .map(() => casual.integer(0, settings.placesLength - 1)),
    favoriteInstructorsId:
      role === "instructor"
        ? []
        : Array(casual.integer(0, settings.maxFavoriteInstructors - 1))
            .fill(null)
            .map(() => casual.integer(0, settings.instructorsLength - 1)),
    instructorInfos:
      role === "student"
        ? {}
        : {
            car: casual.random_value({
              a: "%PUBLIC_URL%/img/ren.jpg",
              b: "%PUBLIC_URL%/img/ope.jpg",
              c: "%PUBLIC_URL%/img/truck.jpg",
            }),
          },
    isAvailable:
      role === "student"
        ? null
        : casual.random_value({
            a: true,
            b: false,
          }),
    role: role || "student",
  };
});

// On définit le générateur pour une session de conduite
casual.define("session", (id) => {
  const dateStart = casual.integer(
    1644422550891,
    1644422550891 + 3 * 31 * 24 * 60 * 60 * 1000
  ); // Between now and in three months
  return {
    id,
    placeId: casual.integer(0, settings.placesLength - 1),
    dateStart,
    dateEnd: dateStart + 60 * 60 * 1000 * casual.integer(1, 3),
    instructorUserId: casual.integer(0, settings.instructorsLength - 1),
    studentUserId: casual.random_element([
      casual.integer(0, settings.usersLength - 1),
      null,
    ]),
  };
});

// Liste du tchat
casual.define("tchats", (id, instructorId, userId) => {
  const chooseSender = ["user", "monitor"];
  const littleTchat = Array(20)
    .fill(null)
    .map((item) => {
      return {
        sender: chooseSender[casual.integer(0, 1)],
        messages: lorem.generateSentences(5),
      };
    });
  return {
    id,
    userId,
    instructorId,
    conversations: [...littleTchat],
  };
});

// On génère une liste d'utilisateurs avec le role "instructeur"
const instructors = Array(settings.instructorsLength)
  .fill(null)
  .map((n, id) => casual.user(id, "instructor"));

// On génère une liste d'utilisateurs avec le role "étudiant"
const users = Array(settings.usersLength)
  .fill(null)
  .map((n, idx) => casual.user(instructors.length + idx, "student"));

// On génère une liste de créneaux de conduite
const sessions = Array(settings.sessionsLength)
  .fill(null)
  .map((n, id) => casual.session(id));

// On génère les conversations
const tchats = Array(settings.tchatLength)
  .fill(null)
  .map((n, id) => casual.tchats(id, instructors[id].id, users[id].id));

// On agrège toutes ces données
const data = {
  users: [...instructors, ...users],
  sessions,
  // On ajoute des "id" aux lieux
  places: places.map((p, idx) => ({
    id: idx,
    ...p,
  })),
  tchats,
};

// On écrit le fichier de base de données
fs.promises
  .writeFile(settings.outputPath, JSON.stringify(data, null, 2))
  .then(() => {
    console.log("Database generated");
  });
