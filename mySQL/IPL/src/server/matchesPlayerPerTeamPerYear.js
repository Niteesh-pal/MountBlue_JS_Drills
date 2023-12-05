function matchesPlayedPerYearPerTeam(connection, tableName) {
  const tableQuery = `SELECT season, winner,COUNT(winner) FROM ${tableName} WHERE result LIKE 'normal'  GROUP BY season,winner;
    `;
  connection
    .query(tableQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.log(err));
}
module.exports.matchesPlayedPerYearPerTeam = matchesPlayedPerYearPerTeam;
