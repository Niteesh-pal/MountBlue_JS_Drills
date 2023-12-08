const movies = require('../movies.json');

function numberOfMoviesPerYear(movies) {
  const list = movies.reduce((acc, movie) => {
    if (acc.hasOwnProperty(movie.Year)) {
      acc[movie.Year]++;
    } else {
      acc[movie.Year] = 1;
    }
    return acc;
  }, {});

  console.log(list);
}

numberOfMoviesPerYear(movies);
