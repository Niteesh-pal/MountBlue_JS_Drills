function bestEconomyBowlerInSuperOver(connection) {
  const sqlQuery = `SELECT bowler, sum(total_runs - legnbye_runs - bye_runs)*6/count(case when wide_runs = 0 AND noball_runs=0 then 1 else null end) as economic
    FROM matchesDelivery 
    WHERE is_super_over >0
    GROUP by bowler
    order by economic asc
    LIMIT 1`;

  connection
    .query(sqlQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.log(err));
}

module.exports.bestEconomyBowlerInSuperOver = bestEconomyBowlerInSuperOver;
