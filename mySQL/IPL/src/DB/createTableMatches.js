const matches = require('../data/matches.json');

function createTablesMatches(connection, tableName1) {
  const matchesCreateQuery = `CREATE TABLE ${tableName1} (
        id INT,
        season VARCHAR(4),
        city VARCHAR(50),
        date DATE,
        team1 VARCHAR(50),
        team2 VARCHAR(50),
        toss_winner VARCHAR(50),
        toss_decision VARCHAR(10),
        result VARCHAR(10),
        dl_applied INT,
        winner VARCHAR(50),
        win_by_runs INT,
        win_by_wickets INT,
        player_of_match VARCHAR(50),
        venue VARCHAR(100),
        umpire1 VARCHAR(50),
        umpire2 VARCHAR(50),
        umpire3 VARCHAR(50)
    )`;

  const insertCricketMatchesData = `INSERT INTO ${tableName1} VALUES ?`;

  return connection.query(matchesCreateQuery).then(() => {
    return connection.query(insertCricketMatchesData, [
      matches.map(Object.values),
    ]);
  });
}

module.exports.createTablesMatches = createTablesMatches;
