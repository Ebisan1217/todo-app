import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { db } from "./firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { FormControl, List, TextField } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Taskitem from "./Taskitem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    margin: "auto",
    width: "40%",
  },
});

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const unSub = collection(db, "tasks");
    // getDocs(unSub).then((snapShot) => {
    //   setTasks(snapShot.docs.map((doc) => ({ ...doc.data() })));
    // });

    onSnapshot(unSub, (task) => {
      setTasks(
        task.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
  }, []);

  const newTask = (e) => {
    addDoc(collection(db, "tasks"), { title: input });
    setInput("");
  };

  return (
    <div className={styles.app__root}>
      <h1>Todo App by React/Firebase</h1>
      <br />
      <FormControl>
        <TextField
          className={classes.field}
          InputLabelProps={{
            shrink: true,
          }}
          label="New task ?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </FormControl>
      <button className={styles.app_root} disabled={!input} onClick={newTask}>
        <AddToPhotosIcon />
      </button>

      <List className={classes.list}>
        {tasks.map((task) => (
          <Taskitem key={task.id} id={task.id} title={task.title} />
        ))}
      </List>
    </div>
  );
};

export default App;
