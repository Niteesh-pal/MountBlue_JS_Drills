function matchesPlayedPerYear(connection, tableName) {
  const matchesQuery = `SELECT season, COUNT(season) AS season_count FROM ${tableName} GROUP BY  season`;
  connection
    .query(matchesQuery)
    .then((data) => console.log(data[0]))
    .catch((err) =>
      console.error(`Error while reading ${tableName}:${err.sqlmessage}`)
    );
}
module.exports.matchesPlayedPerYear = matchesPlayedPerYear;
