function extraRunConcededPerTeam(connection, tableName1, tableName2) {
  const extraRunsQuery = `SELECT bowling_team ,SUM(extra_runs) FROM ${tableName2} WHERE match_id IN (SELECT id FROM ${tableName1} WHERE season = 2016) GROUP BY bowling_team`;

  connection
    .query(extraRunsQuery)
    .then((data) => console.log(data[0]))
    .catch((err) => console.error(err));
}

module.exports.extraRunConcededPerTeam = extraRunConcededPerTeam;
