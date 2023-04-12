const mongoose = require("mongoose");
require('dotenv').config()

const env = process.env.NODE_ENV
const database = process.env.DB
const url = process.env.DB_URL


//   these are options to ensure that the connection is done properly
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
      url,
      connectionParams
    )
    .then(() => {
      // const db = client.db("auth");
      // db.createCollection("users");
      console.log(`Successfully connected to ${database} ! - ${env} NODE_ENV`);

    })
    .catch((error) => {
      console.log(`Failed to connecte  ${database} ! - ${env} NODE_ENV`);
      console.error(error);
    });
}

module.exports = dbConnect;