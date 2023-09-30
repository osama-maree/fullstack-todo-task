import { db } from "../../database/connection.js";

export const RetrieveTodos = (req, res, next) => {
  try {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
      if (err) {
        return res.json({ error: "error" });
      }
      res.status(200).json(rows);
    });
  } catch (err) {
    return next(new Error(err.message, { cause: 500 }));
  }
};

export const AddTodo = async (req, res, next) => {
  try {
    const { id, content, completed } = req.body;
    db.run(
      "INSERT INTO tasks (id,content,completed) VALUES (?, ?, ?)",
      [id, content, completed],
      (err) => {
        if (err) {
          return res.status(404).json({ error: err.message });
        }
        res.status(201).json({ message: "Add Record" });
      }
    );
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const UpdateTask = async (req, res, next) => {
  try {
    const sql = db.prepare("UPDATE tasks SET completed = ? WHERE id = ?");
    sql.run(req.body.completed, req.params.id, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ message: "updated successfully" });
      }
    });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const DeleteTask = async (req, res, next) => {
  try {
    const sql = db.prepare("DELETE FROM tasks WHERE id = ?");

    sql.run(req.params.id, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      } else {
        res.status(200).json({ message: "deleted successfully." });
      }
    });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
