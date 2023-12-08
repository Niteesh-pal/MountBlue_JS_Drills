const movies = require('../movies.json');

function topRatedMovies(movies) {
  const list = movies.reduce((acc, movie) => {
    if (acc.hasOwnProperty(movie.Genre)) {
      acc[movie.Genre].push(movie.Title);
    } else {
      acc[movie.Genre] = [movie.Title];
    }

    return acc;
  }, {});

  console.log(list);
}

topRatedMovies(movies);
