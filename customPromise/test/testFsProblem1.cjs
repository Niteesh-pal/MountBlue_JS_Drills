const { fsProblem1 } = require('../fsProblem1.cjs');

const pathOfDirectory = './output/fsProblem1';
const randomNumberOfFiles = Math.floor(Math.random() * 10) + 1;

fsProblem1(pathOfDirectory, randomNumberOfFiles);
