const mysql = require('mysql2/promise');
const matches = require('../data/matches.json');
const deliveries = require('../data/deliveries.json');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'niteesh@123',
  database: 'IPL',
});

const createTableQuery = `CREATE TABLE cricketMatches (
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

function connectDB() {
  // connection
  //   .query("SHOW TABLES LIKE 'cricketMatches'")
  //   .then((data) => data[0].length > 0)
  //   .then((data) => {
  //     if(data == true){
  //         console.log("cricketMatches table present")
          
  //     }
  //     else{
  //       connection.query(createTableQuery).then(()=>{
  //         connection.query(inse)
  //       })
  //     }
  //   })
  //   .catch(() => console.error('not present'));

  return connection;
}

module.exports.connectDB = connectDB;
