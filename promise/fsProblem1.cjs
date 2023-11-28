const fs = require('fs').promises;

function createDir(filePath, randomNumber) {
  console.log('Request for creating directory');
  fs.mkdir(`${filePath}/fsProblem1`, { recursive: true })
    .then(() => {
      console.log('directory created');
      createrandomNumber(filePath, randomNumber);
    })
    .catch((err) => console.log(err));
}

function createrandomNumber(filePath, randomNumber) {
  console.log('Requesting to create files.......');
  let numberOfFilesCreated = 0;
  for (let index = 1; index <= randomNumber; index++) {
    fs.writeFile(`${filePath}/fsProblem1/file${index}.json`, 'abc')
      .then(() => {
        console.log(`files${index} Created`);
        numberOfFilesCreated++;
        if (numberOfFilesCreated === randomNumber) {
          delteFiles(filePath, randomNumber);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function delteFiles(filePath, randomNumber) {
  console.log('Requesting to delete files............');
  for (let i = 1; i <= randomNumber; i++) {
    fs.unlink(`${filePath}/fsProblem1/file${i}.json`)
      .then(() => console.log(`file${i} deleted`))
      .catch((err) => console.log(err));
  }
}

function fsProblem1(filePath, randomNumber) {
  fs.access('./output/fsProblem1')
    .then(() => {
      console.log('Directory already created....');
      createrandomNumber(filePath, randomNumber);
    })
    .catch(() => {
      createDir(filePath, randomNumber);
    });
}

module.exports.fsProblem1 = fsProblem1;
