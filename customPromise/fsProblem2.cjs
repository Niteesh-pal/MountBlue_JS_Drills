const fs = require('fs');
// const filePath = './output/fsProblem2';

function readFileContent(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(`Error while reading ${path}\n${err}`);
      } else {
        console.log(`Successfull in reading ${path}`);
        resolve(data);
      }
    });
  });
}

function writeNewFile(path, fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${path}/${fileName}`, data, (err) => {
      if (err) {
        reject(`Error while wrtting ${fileName}\n${err}`);
      } else {
        resolve(fileName);
      }
    });
  });
}

function storeFileName(fileName) {
  return new Promise((resolve, reject) => {
    fs.appendFile('./filenames.txt', `${fileName}\n`, (err) => {
      if (err) {
        reject(`Error while add ${fileName} in filenames.txt`);
      } else {
        resolve(`Successfully added ${fileName} in filenames.txt`);
      }
    });
  });
}

function readRecentFileName() {
  return new Promise((resolve, reject) => {
    fs.readFile('./filenames.txt', 'utf-8', (err, data) => {
      if (err) {
        reject(`Error while reading filenames.txt`);
      } else {
        let list = data.split('\n');
        resolve(list[list.length - 2]);
      }
    });
  });
}

function convertToUpperCase(data) {
  return data.toUpperCase();
}
function convertToLowerCaseSentences(data) {
  let lowerCase = data.toLowerCase();
  let sentences = lowerCase.split('.');
  return sentences.join('\n');
}
function sortContent(data) {
  let content = data.split('\n');
  let sortcontent = content.sort();
  return sortcontent.join('\n');
}

function deleteFile(filePath, data) {
  let list = data.split('\n');
  let arr = [];
  for (let i = 0; i < list.length - 1; i++) {
    const promise = new Promise((resolve, reject) => {
      fs.unlink(`${filePath}/${list[i]}`, (err) => {
        if (err) {
          reject(`Error while Deleting ${list[i]}`);
        } else {
          resolve(`${list[i]} deleted`);
        }
      });
    });
    arr.push(promise);
  }

  return Promise.all(arr);
}

function fsProblem2(filePath) {
  readFileContent('./lipsum.txt')
    .then((data) => convertToUpperCase(data))
    .then((data) => writeNewFile(filePath, 'convertToUpperCase.txt', data))
    .then((fileName) => {
      console.log(`${fileName} Created`);
      return storeFileName(fileName);
    })
    .then((res) => {
      console.log(res);
      return readRecentFileName();
    })
    .then((fileName) => readFileContent(`${filePath}/${fileName}`))
    .then((data) => convertToLowerCaseSentences(data))
    .then((data) =>
      writeNewFile(filePath, 'convertToLowerCaseSentences.txt', data)
    )
    .then((fileName) => {
      console.log(`${fileName} Created`);
      return storeFileName(fileName);
    })
    .then((res) => {
      console.log(res);
      return readRecentFileName();
    })
    .then((fileName) => readFileContent(`${filePath}/${fileName}`))
    .then((data) => sortContent(data))
    .then((data) => writeNewFile(filePath, 'sortedContent.txt', data))
    .then((fileName) => {
      console.log(`${fileName} Created`);
      return storeFileName(fileName);
    })
    .then((res) => {
      console.log(res);
      return readFileContent('./filenames.txt');
    })
    .then((data) => deleteFile(filePath, data))
    .then((res) => console.log(res.join(',\n')))
    .catch((err) => console.log(err));
}

module.exports.fsProblem2 = fsProblem2;
