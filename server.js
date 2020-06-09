let express = require("express");
let app = express();

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

app.get("/api/encrypt/:encrypted/:key", async (req, res) => {
  let message = req.params.encrypted;
  let key = req.params.encrypted;
  message = message.toLowerCase().split("");

  message.map((letter) => {
    if (letter === " ") {
      return " ";
    }

    let index = alphabet.findIndex((alphabetLetter) => {
      return alphabetLetter === letter;
    });
    index = index + key;
    if (index > 26) {
      index = 26;
    }
    return alphabet.index;
  });

  message = message.join("");
  return res.send(JSON.stringify({ return: message }));
});

app.get("/api/decrypt/:decrypted/:key", async (req, res) => {
  let message = req.params.decrypted;
  let key = req.params.encrypted;
  message = message.toLowerCase().split("");

  message.map((letter) => {
    if (letter === " ") {
      return " ";
    }
    let index = alphabet.findIndex((alphabetLetter) => {
      return alphabetLetter === letter;
    });
    index = index - key;
    if (index < 0) {
      index = 0;
    }
    return alphabet.index;
  });

  message = message.join("");

  return res.send(JSON.stringify({ return: message }));
});

console.log("hello");

app.listen(8000, "0.0.0.0", () => {
  console.log("app running on port" + 8000);
});
