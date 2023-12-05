function matchesPlayedPerYear(db) {
  db.select('season')
    .count('season as season_count')
    .from('cricketMatches')
    .groupBy('season')
    .then((rows) => console.log(rows))
    .catch((err) => console.error(err))
    .finally(() => db.destroy());
}

module.exports.matchesPlayedPerYear = matchesPlayedPerYear;
