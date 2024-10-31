import { useEffect, useState } from "react";
import Track from "./Track";
import axios from "axios";

const useTodo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setTodo(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, []);

  return todo;
};
const DataFetchHook = () => {
  const todo = useTodo(); // Custom Hook

  console.log(todo);
  return todo.map((todo) => <Track key={todo.id} todo={todo}></Track>);
};

export default DataFetchHook;
