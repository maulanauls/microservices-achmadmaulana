const app = require("./app");
const port = require("./src/connection/config");

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`listen: http://localhost:${port}`);
  /* eslint-enable no-console */
});
