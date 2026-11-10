import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

let isAuthorized = false;

function checkPassword(req, res, next) {
  if (req.body.user_password === "ILoveProgramming") {
    isAuthorized = true;
  }
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkPassword);
app.post("/check", (req, res) => {
  if ((isAuthorized = true)) {
    res.sendFile(__dirname + "/secret.html");
  }
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
