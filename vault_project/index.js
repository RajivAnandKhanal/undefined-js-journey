import express from "express";
import bodyParser from "body-parser";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

let isAuthorized = false;

function passwordChecker(req, res, next) {
  if (req.body.user_password === "ILoveProgramming") {
    isAuthorized = true;
  }
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passwordChecker);
app.post("/check", (req, res) => {
  if ((isAuthorized = true)) {
    res.sendFile(__dirname + "/secret.html");
  }
  console.log(req.body.user_password);
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
