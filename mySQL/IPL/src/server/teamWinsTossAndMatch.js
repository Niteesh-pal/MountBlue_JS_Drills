function teamWinsTossAndMatch(connection, tableName) {
  const sqlQuery = `SELECT toss_winner , COUNT(winner) FROM cricketMatches WHERE toss_winner = winner GROUP BY toss_winner`;

  connection
    .query(sqlQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.error(err));
}

module.exports.teamWinsTossAndMatch = teamWinsTossAndMatch;
