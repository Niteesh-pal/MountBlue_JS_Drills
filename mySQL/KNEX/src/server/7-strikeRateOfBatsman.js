function strikeRateOfBatsman(db, playerName) {
  db.select('season', 'batsman')
    .select(
      db.raw(
        '((SUM(batsman_runs)/COUNT(case when wide_runs =0 and noball_runs = 0 then 1 else null end))*100) As strike'
      )
    )

    .from(function () {
      this.select(
        'season',
        'batsman',
        'total_runs',
        'batsman_runs',
        'wide_runs',
        'noball_runs'
      )
        .from('cricketMatches as c')
        .join('matchesDelivery as p', 'c.id', '=', 'p.match_id')
        .as('sub');
    })
    .where('batsman', 'like', `${playerName}`)
    .groupBy('season', 'batsman')
    .orderBy('season', 'asc')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => db.destroy());
}

module.exports.strikeRateOfBatsman = strikeRateOfBatsman;
