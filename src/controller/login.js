const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let moment = require("moment");
let http = require("../connection/http");

const { parse_require } = require("../helper/parse_require");

async function loggedIn(req, clientDB, res) {
  let body = req.body;
  let response = {
    status: true,
    result: {},
    error: {},
  };
  const schema = {
    userName: {
      require: () => (!!body.userName ? "" : `username is require`),
    },
    password: {
      require: () => (!!body.password ? "" : `password is require`),
    },
  };
  const error = parse_require(schema);
  response.status = false;
  response.error = error ? error : {};

  if (!error) {
    try {
      const collection = clientDB.db("achmadmaulana").collection("login");
      let findByName = await new Promise((resolve) =>
        collection
          .findOne({ userName: body.userName })
          .then((result) => {
            return resolve(result);
          })
          .catch((error) => console.error(error))
      );
      if (!!findByName) {
        let verify = bcrypt.compareSync(body.password, findByName.password);
        if (verify) {
            const token = await jwt.sign(
              findByName,
              process.env.JWT_SECRET_KEY,
              {
                expiresIn: "5d",
              }
            );
            response.status = true;
            response.result = {
              token,
              username: findByName.userName
            };
        } else {
           response.status = false;
           response.error.message = "access denied username or password is wrong, failed to generated token";
        }
      } else {
        response.status = false;
        response.error.message = `username or password is not registered`;
      }
      return response;
    } catch (err) {
      console.log(err);
      res.status(500);
      res.json(http.responseHttp(500, err, false));
    }
  }
  return response;
}

module.exports = {
  loggedIn,
};
