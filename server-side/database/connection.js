import sqlite3 from "sqlite3";

// Connect to a SQLite database or create a new one
export const db = new sqlite3.Database("mydb.sqlite3", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

//For Create Table
// db.run(
//   "CREATE TABLE tasks (id INT PRIMARY KEY, content TEXT,completed BOOLEAN)"
// );
