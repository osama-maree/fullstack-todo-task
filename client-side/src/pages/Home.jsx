import React, { useEffect, useState } from "react";
import Title from "../component/Title.jsx";
import InputAdd from "../component/InputAdd.jsx";
import SearchItem from "../component/SearchItem.jsx";
import Footer from "../component/Footer.jsx";
import AlertCustom from "../component/AlertCustom.jsx";
import ListItemCustom from "../component/ListItemCustom.jsx";
import { List } from "@mui/material";
import { toast } from "react-toastify";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [search, setSearch] = useState();
  const [temp, setTemp] = useState([]);
  const [hide, setHide] = useState(true);
  const fetchTodo = () => {
    const baseURL = process.env.REACT_APP_API_URL;
    fetch(`${baseURL}`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (search) {
      setTemp(() =>
        tasks.filter((t) =>
          t.text.toUpperCase().startsWith(search.toUpperCase())
        )
      );
    } else {
      setTemp(() => []);
    }
  }, [search]);
  useEffect(() => {
    fetchTodo();
  }, []);
  const showToast = (text) => {
    toast.success(`${text}`, {
      position: "bottom-right",
    });
  };
  const handleOpen = () => {
    setOpenSuccess(false);
    if (open) return;
    setOpen((open) => !open);
  };
  const handleOpenSuccess = () => {
    setOpen(false);
    if (openSuccess) return;
    setOpenSuccess((openSuc) => !openSuc);
  };
  const addTask = () => {
    if (taskText.trim() !== "") {
      const data = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        content: taskText,
        completed: false,
      };

      fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseData) => {
          handleOpenSuccess();
          fetchTodo();
          setTaskText("");
          console.log("Response Data:", responseData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      handleOpen();
    }
  };
  const toggleTask = (index) => {
    const todo = tasks.find((t) => t.id === index);
    fetch(`${process.env.REACT_APP_API_URL}/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        fetchTodo();
        showToast("Successfully Toggle");

        console.log("Response Data:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const deleteTask = (index) => {
    fetch(`${process.env.REACT_APP_API_URL}/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        fetchTodo();
        showToast("Successfully deleted");

        console.log("Response Data:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      {open && (
        <AlertCustom
          icon={"error"}
          Open={() => setOpen(false)}
          text={"Please Fill Your Task"}
        />
      )}
      {openSuccess && (
        <AlertCustom
          icon={"success"}
          Open={() => setOpenSuccess(false)}
          text={"Added Task"}
        />
      )}
      <Title title={"Osama-Task"} />
      <InputAdd
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={addTask}
      />
      <SearchItem
        Tasks={tasks}
        search={search}
        setSearch={setSearch}
        hide={hide}
        setHide={setHide}
      />

      {hide && (
        <List>
          {temp.length > 0 || search
            ? temp.map((task, index) => (
                <ListItemCustom
                  key={index}
                  task={task}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              ))
            : tasks.map((task, index) => (
                <ListItemCustom
                  key={index}
                  task={task}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              ))}
        </List>
      )}
      <Footer tasks={tasks} />
    </>
  );
};

export default Home;
