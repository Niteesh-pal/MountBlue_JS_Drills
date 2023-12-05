function teamWinsTossAndMatch(db) {
  db.select('toss_winner')
    .count('winner')
    .from('cricketMatches')
    .where('toss_winner', '=', db.raw('winner'))
    .groupBy('toss_winner')
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(() => db.destroy());
}

module.exports.teamWinsTossAndMatch = teamWinsTossAndMatch;
