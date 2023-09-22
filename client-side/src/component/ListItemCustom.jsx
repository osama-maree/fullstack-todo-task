import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const ListItemCustom = ({ task, toggleTask,  deleteTask }) => {
  return (
    <ListItem dense button sx={{ borderBottom: "1px solid #e5e5e5" }}>
      <Checkbox
        edge="start"
        checked={task.completed}
        tabIndex={-1}
        disableRipple
        onClick={() => toggleTask(task.id)}
      />
      <ListItemText
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTask(task.id)}
        >
          <span role="img" aria-label="delete" className="MuiIconButton-label">
            <DeleteIcon color="error" />
          </span>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemCustom;
