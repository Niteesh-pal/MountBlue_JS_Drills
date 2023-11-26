const fs = require('fs').promises;

function generateRandomNumber() {
  const number = Math.floor(Math.random() * 10) + 1;

  return number;
}

function createDir(randomNumber) {
  console.log('Request for creating directory');
  fs.mkdir('./output/fsProblem1', { recursive: true })
    .then(() => {
      console.log('directory created');
      createrandomNumber(randomNumber);
    })
    .catch((err) => console.log(err));
}

function createrandomNumber(randomNumber) {
  console.log('Requesting to create files.......');
  let numberOfFilesCreated = 0;
  for (let index = 1; index <= randomNumber; index++) {
    fs.writeFile(`./output/fsProblem1/file${index}.json`, 'abc')
      .then(() => {
        console.log(`files${index} Created`);
        numberOfFilesCreated++;
        if (numberOfFilesCreated === randomNumber) {
          delteFiles(randomNumber);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function delteFiles(randomNumber) {
  console.log('Requesting to delete files............');
  for (let i = 1; i <= randomNumber; i++) {
    fs.unlink(`./output/fsProblem1/file${i}.json`)
      .then(() => console.log(`file${i} deleted`))
      .catch((err) => console.log(err));
  }
}

function fsProblem1() {
  const randomNumber = generateRandomNumber();

  fs.access('./output/fsProblem1')
    .then(() => {
      console.log('Directory already created....');
      createrandomNumber(randomNumber);
    })
    .catch(() => {
      createDir(randomNumber);
    });
}

fsProblem1();
