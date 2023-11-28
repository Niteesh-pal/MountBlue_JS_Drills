const { fsProblem1 } = require('../fsProblem1.cjs');

const filePath = './output';
const randomNumber = Math.floor(Math.random() * 10) + 1;

fsProblem1(filePath, randomNumber);
