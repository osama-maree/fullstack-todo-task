import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const ListItemCustom = ({ task, toggleTask, index, deleteTask }) => {
  return (
    <ListItem dense button sx={{ borderBottom: "1px solid #e5e5e5" }}>
      <Checkbox
        edge="start"
        checked={task.completed}
        tabIndex={-1}
        disableRipple
        onClick={() => toggleTask(index)}
      />
      <ListItemText
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
        onClick={() => toggleTask(index)}
      >
        {task.text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTask(index)}
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
