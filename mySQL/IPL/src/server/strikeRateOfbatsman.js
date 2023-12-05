function strikeRateOfBatsman(connection, playerName) {
  const sqlQuery = `SELECT season, batsman,
    ((SUM(batsman_runs)/COUNT(case when wide_runs =0 and noball_runs = 0 then 1 else null end))*100) As strike
     From
           (select season,batsman,total_runs,batsman_runs,wide_runs,noball_runs 
           FROM cricketMatches AS c JOIN matchesDelivery AS p 
           On c.id = p.match_id) As sub
    where batsman LIKE "${playerName}"
    group by season,batsman
    order by season asc
    `;
  connection
    .query(sqlQuery)
    .then((data) => {
      if (data[0].length > 0) {
        console.log(data[0]);
      } else {
        console.log('player does not found');
      }
    })
    .catch((err) => console.log(err));
}

module.exports.strikeRateOfBatsman = strikeRateOfBatsman;
