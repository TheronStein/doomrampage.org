const chokidar = require('chokidar');
const sqlite3 = require('sqlite3').verbose();

// Path to your SQLite database file
const dbPath = '/home/zandronum/zan32/priv.db';

// Initialize watcher
const watcher = chokidar.watch(dbPath, {
  persistent: true
});


// Function to read from the database
function readFromDatabase() {
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Connected to the SQLite database.');
  });

  db.serialize(() => {
    db.each(`SELECT * FROM myTable`, (err, row) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(row);
    });
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Close the database connection.');
  });
}

// Add event listener for file changes
watcher.on('change', (path, stats) => {
  console.log(`File ${path} has been changed`);
  readFromDatabase();
});