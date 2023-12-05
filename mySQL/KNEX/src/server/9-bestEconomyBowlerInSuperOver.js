function bestEconomyBowlerInSuperOver(db) {
  db.select(
    'bowler',
    db.raw(
      'sum(total_runs - legnbye_runs - bye_runs)*6/count(case when wide_runs = 0 AND noball_runs=0 then 1 else null end) as economic'
    )
  )
    .from('matchesDelivery')
    .where('is_super_over', '>', '0')
    .groupBy('bowler')
    .orderBy('economic', 'asc')
    .limit('1')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => db.destroy());
}
module.exports.bestEconomyBowlerInSuperOver = bestEconomyBowlerInSuperOver;
