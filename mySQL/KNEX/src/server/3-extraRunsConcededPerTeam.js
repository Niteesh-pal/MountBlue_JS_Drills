function extraRunConcededPerTeam(db) {
  db.select('bowling_team')
    .sum('extra_runs')
    .from('matchesDelivery')
    .where('match_id', 'In', function () {
      this.select('id').from('cricketMatches').where('season', '=', '2016');
    })
    .groupBy('bowling_team')
    .then((data) => console.log(data))
    .catch((err) => console.err(err))
    .finally(() => db.destroy());
}

module.exports.extraRunConcededPerTeam = extraRunConcededPerTeam;
