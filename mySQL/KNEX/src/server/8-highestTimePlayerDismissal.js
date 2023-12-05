function highestTimesDismissedPLayer(db) {
  db.select('player_dismissed', 'bowler', 'times')
    .from(function () {
      this.select('player_dismissed', 'bowler')
        .count('player_dismissed as times')
        .rank('p', db.raw('order by COUNT(player_dismissed) desc'))
        .from('matchesDelivery')
        .whereNot('player_dismissed', 'LIKE', '')
        .where('dismissal_kind', '!=', 'run out')
        .groupBy('player_dismissed', 'bowler')
        .as('r');
    })
    .where('p', '=', '1')
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(() => db.destroy());
}
module.exports.highestTimesDismissedPLayer = highestTimesDismissedPLayer;
