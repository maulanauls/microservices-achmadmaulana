const clientDB = require('../connection/database');
let http = require("../connection/http");
const { parse_require } = require("../helper/parse_require");
// const clearCache = require("../helper/cache");

async function userCreate(req, res) {
  const collection = clientDB.db("achmadmaulana").collection("user");
  let body = req.body;
  let response = {
    status: true,
    result: {},
    error: {}
  };

  const parameter = {
    userName: body.userName,
    accountNumber: body.accountNumber,
    emailAddress: body.emailAddress,
    identityNumber: body.identityNumber,
  };

  const schema = {
    userName: {
      require: () => (!!body.userName ? "" : `username is require`),
    },
    accountNumber: {
      require: () => (!!body.accountNumber ? "" : `account number is require`),
    },
    emailAddress: {
      require: () => (!!body.emailAddress ? "" : `email address is require`),
    },
    identityNumber: {
      require: () => (!!body.identityNumber ? "" : `identity number is require`),
    },
  };
  const error = parse_require(schema);
  response.status = false;
  response.error = error ? error : {};

  if (!error) {
    try {
      let findByNumber = await new Promise((resolve) =>
        collection
          .findOne({ accountNumber: body.accountNumber })
          .then((result) => {
            return resolve(result);
          })
          .catch((error) => console.error(error))
      );
      if (!findByNumber) { /* if didnt register */
        let query = await new Promise((resolve) =>
          collection
            .insertOne(parameter)
            .then((result) => {
              // clearCache(parameter);
              return resolve(result);
            })
            .catch((error) => console.error(error))
        );
        response.result.id = query.insertedId;
      } else {
        response.status = false;
        response.error.message = `This account number [${body.accountNumber}] has been registered`;
      }
      return response;
    } catch (err) {
      console.log(err)
      res.status(500);
      res.json(http.responseHttp(500, err, false));
    }
  }

  return response
}

module.exports = {
  userCreate,
};
