function checkTables(connection, tableName1, tableName2) {
  promise1 = `SHOW TABLES LIKE '${tableName1}'`;
  promise2 = `SHOW TABLES LIKE '${tableName2}'`;
  return Promise.all([connection.query(promise1), connection.query(promise2)]);
}

module.exports.checkTables = checkTables;
