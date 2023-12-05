function highestPlayerOfMatchEachSeason(db) {
  db.select('season', 'player_of_match', 'times')
    .from(function () {
      this.select('season', 'player_of_match')
        .count('player_of_match as times')
        .rank(
          'player_rank',
          db.raw('PARTITION BY season ORDER BY COUNT(player_of_match) DESC')
        )
        .from('cricketMatches')
        .groupBy('season', 'player_of_match')
        .as('playerRanking');
    })

    .where('player_rank', '=', 1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => db.destroy());
}

module.exports.highestPlayerOfMatchEachSeason = highestPlayerOfMatchEachSeason;
