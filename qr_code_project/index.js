import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

const answer = await inquirer
  .prompt([{ message: "Type your URL", type: "input", name: "urlInput" }])
  .then((answer) => {
    // console.log(typeof answer.urlInput);

    var newQr = qrImage.image(answer.urlInput, { type: "png" });
    newQr.pipe(fs.createWriteStream("output_qr.png"));

    fs.appendFile("list_of_inputs.txt", `${answer.urlInput}\n`, (err) => {
      if (err) throw err;
      console.log("list of input file has been updated");
    });
  })
  .catch((error) => {});
