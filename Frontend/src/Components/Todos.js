import React, { useState, useEffect } from "react";
import SingleTodo from "./SingleTodo";
import "../Css/Todos.css";
import Button from "react-bootstrap/Button";
import DeleteForm from "./DeleteForm";
export default function Todos(props) {
  const [todos, setTodos] = useState([]);
  useEffect(getTodos, []);

  async function getTodos() {
    try {
      const url = "http://localhost:8000/todo";
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  }
  function createTodoList() {
    const list = todos.map((todo) => {
      return (
        <SingleTodo title={todo.titleTodo} description={todo.descriptionTodo} />
      );
    });
    return list;
  }
  const deletemessage = "Are you sure you want to delete the Todo?";
  return (
    <div className="todos-wrapper">
      <div className="todos-header">
        <Button className="addtodo-btn" title="Add todo">
          <i class="bi bi-plus-circle"></i>
        </Button>
        <h1>My ToDos</h1>
      </div>
      <div className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
        {createTodoList()}
      </div>
      <DeleteForm title={deletemessage} id={"test"} />
    </div>
  );
}
