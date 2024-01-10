const express = require('express');
const config = require('./config/config');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

console.log(`Starting ${config.appName} application...`);

app.use('/api', routes);

app.listen(port, () => {
  console.log(`${config.appName} listening at http://localhost:${port}`);
});
