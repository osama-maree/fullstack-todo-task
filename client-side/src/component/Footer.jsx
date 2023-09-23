import { Box } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton.jsx";

const Footer = ({ tasks }) => {
  const successTasks = tasks.reduce(
    (acc, task) => (task.completed ? acc + 1 : acc),
    0
  );
  const pendingTasks = tasks.reduce(
    (acc, task) => (!task.completed ? acc + 1 : acc),
    0
  );
  const hasTasks = !!tasks.length;
  return (
    <Box
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <CustomButton
        type={"success"}
        text={`Success Tasks: ${successTasks}`}
        dis={hasTasks}
      />
      <CustomButton
        type={"warning"}
        text={`Pending Tasks: ${pendingTasks}`}
        dis={hasTasks}
      />
      <CustomButton
        type={"primary"}
        text={`ALl Tasks: ${tasks.length}`}
        dis={hasTasks}
      />
    </Box>
  );
};

export default Footer;
