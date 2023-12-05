function highestTimesDismissedPLayer(connection) {
  const sqlQuery = `SELECT player_dismissed,bowler,times From 

	(SELECT player_dismissed,bowler,COUNT(player_dismissed) As times,
    Rank() OVER (order by Count(player_dismissed) desc) as p
	 FROM matchesDelivery 
	 WHERE player_dismissed NOT LIKE "" 
	 GROUP BY player_dismissed,bowler) as r
     
     Where p = 1
     group by player_dismissed, bowler
 `;

  connection
    .query(sqlQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.log(err));
}

module.exports.highestTimesDismissedPLayer = highestTimesDismissedPLayer;
