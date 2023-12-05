function highestPlayerOfMatchEachSeason(connection) {
  const sqlQuery = `SELECT
        season,
        player_of_match,
        times
    FROM (
        SELECT
            season,
            player_of_match,
            COUNT(player_of_match) AS times,
            RANK() OVER (PARTITION BY season ORDER BY COUNT(player_of_match) DESC) AS player_rank
        FROM
            cricketMatches
        GROUP BY
            season,
            player_of_match
    ) AS PlayerRanking
    WHERE
        player_rank = 1;`;

  connection
    .query(sqlQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.log(err));
}

module.exports.highestPlayerOfMatchEachSeason = highestPlayerOfMatchEachSeason;
