const express = require("express");

const app = express();

app.use(express.json());
app.disable('etag');

app.get("/projects", (req, res) => {
  console.log('REQUISICAO')
  res.status(200).json({
    projects: {
      'project 1': 'Ecoleta',
      'project2': 'NextJS Blog'
    }
  });
  return res.end();
});

module.exports = app;