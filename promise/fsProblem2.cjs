const fs = require('fs').promises;

function readFileContent(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      console.log(`Succesfully in reading ${path}`);
      return data;
    })
    .catch((err) => console.log(`Error while reading ${path}:\n ${err}`));
}
function storeFileName(fileName, path) {
  return fs
    .appendFile(path, `${fileName}\n`)
    .then(() => console.log(`${fileName} successfully stored in filenames.txt`))
    .catch((err) =>
      console.log(`Error while writting ${fileName} in ${path}: ${err}`)
    );
}
function recentFileName(fileName) {
  const list = fileName.split('\n');
  return list[list.length - 2];
}
function convertToUpperCase(filepath, fileName, data) {
  return fs
    .writeFile(`${filepath}/${fileName}`, data)
    .then(() => console.log(`successfully write in ${fileName}`))
    .catch((err) => {
      console.log(`Error while writting ${fileName}: ${err}`);
    });
}

function convertToLowerCaseSentence(content, fileName, path) {
  let lowerCaseData = content.toLowerCase();
  let sentences = lowerCaseData.split('.');
  return fs
    .writeFile(`${path}/${fileName}`, sentences.join('\n'))
    .then(() => console.log(`successfully write in ${fileName}`))
    .catch((err) => console.log(`Error while writting ${fileName}: ${err}`));
}

function sortNewFile(content, fileName, path) {
  let data = content.split('\n');
  let sortContent = data.sort();
  return fs
    .writeFile(`${path}/${fileName}`, sortContent.join('\n'))
    .then(() => console.log(`successfully write in ${fileName}`))
    .catch((err) => console.log(`Error while writting ${fileName}: ${err}`));
}

function deleteFiles(filepath, content) {
  const list = content.split('\n');

  for (let i = 0; i < list.length - 1; i++) {
    fs.unlink(`${filepath}/${list[i]}`)
      .then(() => console.log(`file deleted ${list[i]}`))
      .catch((err) => console.log(`Error while deleting ${list[i]}:\n ${err}`));
  }
}

function fsProblem2(filepath) {
  readFileContent('./lipsum.txt')
    .then((content) => {
      return convertToUpperCase(
        filepath,
        'convertToUpperCase.txt',
        content.toUpperCase()
      );
    })
    .then(() => {
      return storeFileName('convertToUpperCase.txt', './filenames.txt');
    })
    .then(() => readFileContent(`./filenames.txt`))
    .then((content) => recentFileName(content))
    .then((fileName) => readFileContent(`${filepath}/${fileName}`))
    .then((data) =>
      convertToLowerCaseSentence(
        data,
        'convertToLowercaseSentences.txt',
        filepath
      )
    )
    .then(() =>
      storeFileName('convertToLowercaseSentences.txt', './filenames.txt')
    )
    .then(() => readFileContent(`./filenames.txt`))
    .then((content) => recentFileName(content))
    .then((fileName) => readFileContent(`${filepath}/${fileName}`))
    .then((data) => sortNewFile(data, 'sortContent.txt', filepath))
    .then(() => storeFileName('sortContent.txt', './filenames.txt'))
    .then(() => readFileContent(`./filenames.txt`))
    .then((content) => deleteFiles(filepath, content))
    .catch((err) => {
      console.log(err);
    });
}

// fsProblem2(filepath);

module.exports.fsProblem2 = fsProblem2;
