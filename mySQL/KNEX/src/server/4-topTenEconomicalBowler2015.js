function topTenEconomicalBowler2015(db) {
  db.select('bowler')
    .select(
      db.raw(
        'ROUND(SUM(total_runs - legnbye_runs - bye_runs)*6/COUNT(case when wide_runs = 0 AND noball_runs = 0 then 1 else null end),2) AS economical'
      )
    )
    .from('matchesDelivery')
    .whereIn('match_id', function () {
      this.select('id').from('cricketMatches').where('season', '=', '2015');
    })
    .groupBy('bowler')
    .orderBy('economical', 'asc')
    .limit('10')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => db.destroy());
}

module.exports.topTenEconomicalBowler2015 = topTenEconomicalBowler2015;
