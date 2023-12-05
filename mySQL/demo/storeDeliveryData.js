const sql = require('mysql2/promise');
const deliveries = require('./deliveries.json');

const connection = sql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'niteesh@123',
  database: 'IPL',
});

const createDeliveryTable = `CREATE TABLE matchesDelivery (
    match_id INT, 
    inning INT,
    batting_team VARCHAR(50),
    bowling_team VARCHAR(50),
    overs INT,
    ball INT,
    batsman VARCHAR(20),
    non_striker VARCHAR(20),
    bowler VARCHAR(20),
    is_super_over INT,
    wide_runs INT,
    bye_runs INT,
    legnbye_runs INT,
    noball_runs INT,
    penalty INT,
    batsman_runs INT,
    extra_runs INT,
    total_runs INT,
    player_dismissed VARCHAR(30),
    dismissal_kind VARCHAR(30),
    fielder VARCHAR(30)
    
  )`;

const insertDeliveryData = `INSERT INTO matchesDelivery VALUES ?`;
const displayData = `SELECT * FROM matchesDelivery`;

connection
  .getConnection()
  .then(() => {
    console.log('CONNECTED TO DATABASE');
    return connection.query(createDeliveryTable);
  })
  .then(() => {
    console.log('TABLE created Successfully');
    return connection.query(insertDeliveryData, [
      deliveries.map(Object.values),
    ]);
  })
  .then(() => {
    console.log('Data INSERTED successfully');
    // return connection.query(displayData);
  })
  // .then((data) => console.log(data))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => connection.end());
