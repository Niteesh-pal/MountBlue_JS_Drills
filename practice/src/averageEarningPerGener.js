const movies = require('../movies.json');

function movieEarningPerGener(movies) {
  const list = movies.reduce((acc, movie) => {
    if (!acc[movie.Genre]) {
      acc[movie.Genre] = {
        total: movie['Gross_Earning_in_Mil'],
        count: 1,
        average: 0,
      };
    } else {
      acc[movie.Genre]['total'] += Number(movie['Gross_Earning_in_Mil'])
        ? movie['Gross_Earning_in_Mil']
        : 0;
      acc[movie.Genre]['count']++;
      acc[movie.Genre]['average'] = (
        acc[movie.Genre]['total'] / acc[movie.Genre]['count']
      ).toFixed(2);
    }

    return acc;
  }, {});
  console.log(list);
}
movieEarningPerGener(movies);
