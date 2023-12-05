const knex = require('knex');
const config = require('./knexfile.js');
const {
  matchesPlayedPerYear,
} = require('./src/server/1-matchesPayedPerYear.js');

const {
  matchesPlayedPerTeamPeryear,
} = require('./src/server/2-matchesPlayedPerTeamPerYear.js');
const db = knex(config);

const {
  extraRunConcededPerTeam,
} = require('./src/server/3-extraRunsConcededPerTeam.js');

const {
  topTenEconomicalBowler2015,
} = require('./src/server/4-topTenEconomicalBowler2015.js');

const {
  teamWinsTossAndMatch,
} = require('./src/server/5-teamWinsTossAndMatches.js');

const {
  highestPlayerOfMatchEachSeason,
} = require('./src/server/6-highestPlayerOfMatchEachseason.js');

const {
  strikeRateOfBatsman,
} = require('./src/server/7-strikeRateOfBatsman.js');

const {
  highestTimesDismissedPLayer,
} = require('./src/server/8-highestTimePlayerDismissal.js');

const {
  bestEconomyBowlerInSuperOver,
} = require('./src/server/9-bestEconomyBowlerInSuperOver.js');

matchesPlayedPerYear(db);
matchesPlayedPerTeamPeryear(db);
extraRunConcededPerTeam(db);
topTenEconomicalBowler2015(db);
teamWinsTossAndMatch(db);

highestPlayerOfMatchEachSeason(db);

strikeRateOfBatsman(db, 'DA Warner');
highestTimesDismissedPLayer(db);

bestEconomyBowlerInSuperOver(db);
