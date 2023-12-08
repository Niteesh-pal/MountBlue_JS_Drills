const movies = require('../movies.json');

function listAllActionMovies(movies) {
  let list = movies.reduce((acc, movie) => {
    if (movie.Genre === 'Action') {
      acc.push(movie.Title);
    }

    return acc;
  }, []);

  console.log(list);
}

listAllActionMovies(movies);
