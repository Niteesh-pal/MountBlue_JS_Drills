const sql = require('mysql2/promise');
const matches = require('./matches.json');

const connection = sql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'niteesh@123',
  database: 'demo',
});

const createTableQuery = `
CREATE TABLE cricketMatches (
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

const insertCricketMatchesData = 'INSERT INTO cricketMatches VALUES ?';

const displayTableData = 'SELECT * FROM cricketMatches';

connection
  .getConnection()
  .then(() => {
    console.log('Connected to Database');
    return connection.query(createTableQuery);
  })
  .then(() => {
    console.log('Table Created Successfully!!!!');
    return connection.query(insertCricketMatchesData, [
      matches.map(Object.values),
    ]);
  })
  .then(() => {
    console.log('Data Inserted Successfully');
    return connection.query(displayTableData);
  })
  .then((data) => {
    console.log('Displaying table data.......');
    console.log(data);
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
  });
