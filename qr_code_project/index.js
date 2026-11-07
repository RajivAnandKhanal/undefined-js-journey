import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

await inquirer

  .prompt([{ message: "Type your Input", type: "input", name: "userInput" }])

  .then((answer) => {
    var newQr = qrImage.image(answer.userInput, { type: "png" });
    newQr.pipe(fs.createWriteStream("output_qr.png"));

    fs.appendFile("list_of_inputs.txt", `${answer.userInput}\n`, (err) => {
      if (err) throw err;
      console.log("list of input file has been updated");
    });
  })
  .catch((error) => {
    if (error) throw err;
  });
