import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var isAuthorized = false;

// function checkPassword(req, res, next) {
// const password = req.body["user_password"];
// if (password === "ILoveProgramming") {
// isAuthorized = true;
// }
// next();
// }
// app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/check", (req, res) => {
// if (isAuthorized) {
// res.sendFile(__dirname + "/secret.html");
// } else {
// res.sendFile(__dirname + "/index.html");
// }
// });

app.post("/check", (req, res) => {
  if (req.body["user_password"] === "ILoveProgramming") {
    res.sendFile(__dirname + "/secret.html");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
