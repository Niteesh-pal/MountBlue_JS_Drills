const movies = require('../movies.json');

function highestAvgRatingDirector(movies) {
  const highestratingDirector = { Director: '', avg: 0 };

  const list = movies.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.Director)) {
      acc[curr.Director]['count']++;
      acc[curr.Director]['rating'] += curr.Rating;
      acc[curr.Director]['avg'] =
        acc[curr.Director]['rating'] / acc[curr.Director]['count'];

      if (highestratingDirector['avg'] < acc[curr.Director]['avg']) {
        highestratingDirector['Director'] = curr.Director;
        highestratingDirector['avg'] = acc[curr.Director]['avg'];
      }
    } else {
      acc[curr.Director] = { count: 1, rating: curr.Rating, avg: curr.Rating };
    }
    return acc;
  }, {});

  const sortedDirectors = Object.keys(list).sort(
    (a, b) => list[b].avg - list[a].avg
  );
  console.log(sortedDirectors);

  console.log(highestratingDirector);
}

highestAvgRatingDirector(movies);
