const fs = require('fs');
const path = require('path');
const filePath = './lipsum.txt';

function main(filePath, convertUpperCase, convertLowerCase) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      convertUpperCase(data, storeNameOfFile, convertLowerCase);
      // convertLowerCase(readFileName, storeNameOfFile);
    }
  });
}

function readFileName(data, callback) {
  fs.readFile(data, 'utf-8', (err, file) => {
    if (err) {
      console.log(err);
    } else {
      let fileList = file.split('\n');
      // console.log(fileList);
      callback(fileList[fileList.length - 2].trim());
    }
  });
}
function writeNewFile(path, filename, sentences) {
  fs.writeFile(path + '/' + filename, sentences, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`file Created Successfull ${filename}`);
    }
  });
}
function storeNameOfFile(data) {
  fs.appendFile('./filenames.txt', `${data}\n`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('file name stored');
    }
  });
}

function convertLowerCase(
  readFileName,
  storeNameOfFile,
  writeNewFile,
  sortContentofNewFile
) {
  readFileName('./filenames.txt', (fileName) => {
    fs.readFile(`./output/fsProblem2/${fileName}`, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let content = data.toLocaleLowerCase();
        let sentences = content.split('.');
        writeNewFile(
          './output/fsProblem2',
          'covertToLowerCaseSentence.txt',
          sentences.join('\n')
        );

        storeNameOfFile('covertToLowerCaseSentence.txt');

        sortContentofNewFile(
          readFileName,
          storeNameOfFile,
          writeNewFile,
          deleteFile
        );
      }
    });
  });
}

function sortContentofNewFile(
  readFileName,
  storeNameOfFile,
  writeNewFile,
  deleteFile
) {
  readFileName('./filenames.txt', (fileName) => {
    fs.readFile('./output/fsProblem2/' + fileName, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // let content = data.split('\n');
        // console.log(content);
        // console.log(data);
        let content = data.split('\n').sort();
        writeNewFile(
          './output/fsProblem2',
          'sortContentToFile.txt',
          content.toString()
        );

        storeNameOfFile('sortContentToFile.txt');
        deleteFile();
      }
    });
  });
}

function convertUpperCase(data, storeNameOfFile, convertLowerCase) {
  fs.writeFile(
    './output/fsProblem2/convertToUpperCase.txt',
    data.toUpperCase(),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        storeNameOfFile('convertToUpperCase.txt');
        convertLowerCase(
          readFileName,
          storeNameOfFile,
          writeNewFile,
          sortContentofNewFile
        );
      }
    }
  );
}

function deleteFile() {
  fs.readFile('./filenames.txt', 'utf-8', (err, fileList) => {
    if (err) {
      console.log(err);
    } else {
      let list = fileList.split('\n');
      for (let i = 0; i < list.length - 1; i++) {
        fs.unlink(`./output/fsProblem2/${list[i]}`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('succesfully deleted');
          }
        });
      }
    }
  });
}

function fsProblem2(filePath) {
  main(filePath, convertUpperCase, convertLowerCase);
}

fsProblem2(filePath);
