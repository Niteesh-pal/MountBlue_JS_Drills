function matchesPlayedPerTeamPeryear(db) {
  db.select('season', 'winner')
    .count('winner')
    .from('cricketMatches')
    .where('result', 'like', 'normal')
    .groupBy('season', 'winner')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => db.destroy());
}
module.exports.matchesPlayedPerTeamPeryear = matchesPlayedPerTeamPeryear;
