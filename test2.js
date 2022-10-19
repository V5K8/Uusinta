const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const db = [];

app.get("/", (req, res) => {
  res.json(db);
});

app.get("/shoping-cart", (req, res) => {
  res.send(db);
});

app.get("/shoping-cart/:searchTerm", (req, res) => {
  console.log("Query params:", req.query);
  res.json(
    db.filter((items) => {
      return items.name.startsWith(req.query.search);
    })
  );
});

app.post("/shoping-cart", (req, res) => {
  console.log("Recieved input:", req.body);
  res.json({ ok: true });
  db.push(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
