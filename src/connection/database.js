const MongoClient = require("mongodb").MongoClient;
const path_db =
  "mongodb+srv://achmadmaulana21:V4RajFLeu9jdpdGw@achmadmaulana21.jwsla.mongodb.net/achmadmaulana?retryWrites=true&w=majority";

const client = new MongoClient(path_db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = client;
