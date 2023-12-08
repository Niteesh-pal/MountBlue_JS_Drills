const movies = require('../movies.json');

function highestVotes(movies) {
  const list = movies.reduce((acc, movie) => {
    if (acc.hasOwnProperty(movie.Genre)) {
      acc[movie.Genre]['count']++;
      acc[movie.Genre]['rating'] += movie.Rating;
      acc[movie.Genre]['avg'] =
        acc[movie.Genre]['rating'] / acc[movie.Genre]['count'];
    } else {
      acc[movie.Genre] = { count: 1, rating: movie.Rating, avg: movie.Rating };
    }

    return acc;
  }, {});
  console.log(list);
}

highestVotes(movies);
