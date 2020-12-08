// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { db } = require("gridsome-source-firestore");

module.exports = {
  siteName: "Gridsome",
  plugins: [
    { use: "gridsome-plugin-tailwindcss" },
    {
      use: "gridsome-source-firestore",
      options: {
        credentials: require("./portfolio-faed7-firebase-adminsdk-734zj-ec87db914a.json"),
        collections: [
          {
            ref: (db) => {
              return db.collection("projects").where("active", "==", true);
            },
          },
        ],
      },
    },
  ],
};
