const movies = require('../movies.json');

function moviesPerDecade(movies) {
  const list = movies.reduce((acc, movie) => {
    const year = Number(movie.Year);

    let statDecade = Math.floor(year / 10) * 10;
    let endDecade = statDecade + 10;

    if (!acc[`${statDecade}-${endDecade}`]) {
      acc[`${statDecade}-${endDecade}`] = 1;
    } else {
      acc[`${statDecade}-${endDecade}`]++;
    }

    return acc;
  }, {});
  console.log(list);
}
moviesPerDecade(movies);
