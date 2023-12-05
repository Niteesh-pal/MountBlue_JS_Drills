function topTenEconomicalBowler2015(connection) {
  const sqlQuery = `SELECT bowler,round(SUM(total_runs - legnbye_runs -bye_runs)*6/COUNT(case when wide_runs = 0 AND noball_runs= 0 then 1 else null end),2) AS economical
    FROM matchesDelivery 
    WHERE match_id IN (
       SELECT id FROM cricketMatches WHERE season = 2015)
   GROUP BY bowler
   Order by  economical asc
   LIMIT 10
 `;

  connection
    .query(sqlQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.log(err));
}

module.exports.topTenEconomicalBowler2015 = topTenEconomicalBowler2015;
