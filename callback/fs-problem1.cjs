const fs = require('fs');

let randomNumberOfFiles = (Math.random() + 1) * 5;
randomNumberOfFiles = Math.floor(randomNumberOfFiles);

const absolutePath = './output';

function fsProblem1(path, randomFiles) {
  fs.access(path + '/fsProblem1', (err) => {
    if (err) {
      fs.mkdir(path + '/fsProblem1', (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log();
          createRandomFiles(
            path + '/fsProblem1/',
            randomFiles,
            deleteRandomFiles
          );
        }
      });
    } else {
      createRandomFiles(path + '/fsProblem1/', randomFiles, deleteRandomFiles);
    }
  });
}

function createRandomFiles(path, randomFiles, deleteRandomFiles) {
  for (let i = 1; i <= randomFiles; i++) {
    fs.writeFile(path + `file${i}.txt`, '', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`file created file${i}.txt`);
        deleteRandomFiles(path + `file${i}.txt`);
      }
    });
  }
}

function deleteRandomFiles(path) {
  fs.unlink(path, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`file deleted `);
    }
  });
}

fsProblem1(absolutePath, randomNumberOfFiles);
