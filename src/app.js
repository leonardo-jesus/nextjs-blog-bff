const express = require("express");

const app = express();

app.use(express.json());
app.disable('etag');

app.get("/projects", (req, res) => {
  console.log('REQUISICAO')
  res.status(200).json([
      { 'title': 'Ecoleta', 'description': 'A sustentable marketplace made with' },
      { 'title': 'NextJS Blog', 'description': 'My NextJS Blog!' }
  ]);
  return res.end();
});

module.exports = app;