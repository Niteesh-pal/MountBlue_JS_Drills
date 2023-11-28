const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const pathOfDirectory = './output/fsProblem1';
const randomNumberOfFiles = Math.floor(Math.random() * 10) + 1;

function checkDir() {
  return new Promise((resovle, reject) => {
    fs.stat(pathOfDirectory, (err) => {
      if (err) {
        reject(`No Directory Found`);
      } else {
        resovle(`Directory Already exists`);
      }
    });
  });
}

function createDir(pathOfDirectory) {
  return new Promise((resolve, reject) => {
    fs.mkdir(pathOfDirectory, (err) => {
      if (err) {
        reject(`Error while creating Directory\n${err.message}`);
      } else resolve(`Directory created`);
    });
  });
}
function createRandomFiles(pathOfDirectory, randomNumberOfFiles) {
  let promises = [];
  for (let i = 1; i <= randomNumberOfFiles; i++) {
    const promise = new Promise((resolve, reject) => {
      fs.writeFile(`${pathOfDirectory}/file${i}.json`, '', (err) => {
        if (err) {
          reject(`Error while Creating files\n${err.message}`);
        }
        resolve(`file${i}.json Created`);
      });
    });

    promises.push(promise);
  }

  return Promise.all(promises);
}

function deleDir(pathOfDirectory, randomNumberOfFiles) {
  let promises = [];

  for (let i = 1; i <= randomNumberOfFiles; i++) {
    const promise = new Promise((resolve, reject) => {
      fs.unlink(`${pathOfDirectory}/file${i}.json`, (err) => {
        if (err) {
          reject(`Error while deleting file${i}.json\n${err.message}`);
        } else {
          resolve(`file${i}.json deleted`);
        }
      });
    });

    promises.push(promise);
  }

  return Promise.all(promises);
}

function fsProblem1(pathOfDirectory, randomNumberOfFiles) {
  checkDir(pathOfDirectory)
    .then((data) => console.log(data))
    .then(() => createRandomFiles(pathOfDirectory, randomNumberOfFiles))
    .then((data) => console.log(`${data.join(',\n')}`))
    .then(() => deleDir(pathOfDirectory, randomNumberOfFiles))
    .then((data) => console.log(`${data.join(',\n')}`))
    .catch((err) => {
      console.log(err);
      console.log(`Creating Directory ${pathOfDirectory}`);
      createDir(pathOfDirectory)
        .then((data) => console.log(data))
        .then(() => fsProblem1(pathOfDirectory, randomNumberOfFiles))
        .catch((err) => console.log(err));
    });
}

fsProblem1(pathOfDirectory, randomNumberOfFiles);
