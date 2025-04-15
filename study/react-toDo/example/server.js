import express from 'express'
import fs from 'fs/promises';

const app = express();
app.use(express.json());


app.get ('/', async (req, res) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();
  res.send(html);
});

app.get('/api/randomNumber', (req, res) => {
  res.json({
    randomNumber: Math.random(),
  });
});

app.use('/static', express.static('static'));

app.listen(5080);