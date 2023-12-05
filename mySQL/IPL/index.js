const { connectDB } = require('./src/DB/connectDB.js');
const { checkTables } = require('./src/DB/checkTables.js');
const { createDeliveriesTable } = require('./src/DB/createDeliveriesTable.js');
const {
  matchesPlayedPerYear,
} = require('./src/server/matchesPlayedPerYear.js');

const {
  matchesPlayedPerYearPerTeam,
} = require('./src/server/matchesPlayerPerTeamPerYear.js');

const {
  extraRunConcededPerTeam,
} = require('./src/server/extraRunsConcededPerTeam.js');

const {
  teamWinsTossAndMatch,
} = require('./src/server/teamWinsTossAndMatch.js');

const {
  highestPlayerOfMatchEachSeason,
} = require('./src/server/highestPlayerOfMatchEachSeason.js');

const {
  highestTimesDismissedPLayer,
} = require('./src/server/higestTimesDismissedPlayer.js');

const {
  topTenEconomicalBowler2015,
} = require('./src/server/topTenEconomicalBowler.js');

const {
  bestEconomyBowlerInSuperOver,
} = require('./src/server/bestEconomyBowlerInSuperOver.js');

const { strikeRateOfBatsman } = require('./src/server/strikeRateOfbatsman.js');
const { createTablesMatches } = require('./src/DB/createTableMatches.js');

const connection = connectDB();

checkTables(connection, 'cricketMatches', 'matchesDelivery')
  .then((data) => {
    if (data[0][0].length > 0 && data[1][0].length > 0) {
      return;
    } else {
      return Promise.all([
        createTablesMatches(connection, 'cricketMatches'),
        createDeliveriesTable(connection, 'matchesDelivery'),
      ]);
    }
  })
  .then(() => main())
  .catch((err) => console.log(err))
  .finally(()=>connection.end());

function main() {
  matchesPlayedPerYear(connection, 'cricketMatches');
  matchesPlayedPerYearPerTeam(connection, 'cricketMatches');
  extraRunConcededPerTeam(connection, 'cricketMatches', 'matchesDelivery');
  topTenEconomicalBowler2015(connection);

  teamWinsTossAndMatch(connection, 'cricketMatches');
  highestPlayerOfMatchEachSeason(connection);
  strikeRateOfBatsman(connection, process.argv[2]);

  highestTimesDismissedPLayer(connection);

  bestEconomyBowlerInSuperOver(connection);
}
