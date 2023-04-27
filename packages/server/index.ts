import express from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const app = express();
const port = 5000;
dotenv.config()

app.get('/', (req, res) => {
  res.send({message: 'API Key required to access this api'});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});