import React, { useState } from "react";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [todos, setTodos] = useState(["Menyapu", "Mengepel", "Memasak"]);

  const handleClick = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do-List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDo;
