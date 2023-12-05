const delivery = require('../data/deliveries.json');

function createDeliveriesTable(connection, tableName1) {
  const matchesCreateQuery = `CREATE TABLE ${tableName1} (
        match_id INT,
        inning INT,
        batting_team VARCHAR(50),
        bowling_team VARCHAR(50),
        overs INT,
        ball INT,
        batsman VARCHAR(50),
        non_striker VARCHAR(50),
        bowler VARCHAR(50),
        is_super_over INT,
        wide_runs INT,
        bye_runs INT,
        legnbye_runs INT,
        noball_runs INT,
        penalty_runs INT,
        batsman_runs INT,
        extra_runs INT,
        total_runs INT,
        player_dismissed VARCHAR(50),
        dismissal_kind VARCHAR( 50),
        fielder VARCHAR(50)
    )`;

  const insertCricketDeliveryData = `INSERT INTO ${tableName1} VALUES ?`;

  return connection.query(matchesCreateQuery).then(() => {
    return connection.query(insertCricketDeliveryData, [
      delivery.map(Object.values),
    ]);
  });
}

module.exports.createDeliveriesTable = createDeliveriesTable;
