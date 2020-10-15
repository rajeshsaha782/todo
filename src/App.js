import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filter: "all",
    };
  }
  componentDidMount() {
    let prevTodoList = localStorage.getItem("todoList");
    if (prevTodoList) {
      let todoList = JSON.parse(prevTodoList);
      this.setState({ todoList });
    }
  }
  setTodoList(todoList) {
    this.setState(
      {
        todoList,
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
      }
    );
  }
  addTodo = (todoText) => {
    console.log("text: ", todoText);
    let todo = {
      id: Math.random() * 100,
      text: todoText,
      completed: false,
    };
    let todoList = [...this.state.todoList, todo];
    this.setTodoList(todoList);
  };
  onCompletedTodo = (todo) => {
    const { todoList } = this.state;
    let index = todoList.indexOf(todo);
    todo.completed = !todo.completed;
    todoList[index] = todo;
    this.setTodoList(todoList);
  };
  onDeleteTodo = (todo) => {
    const { todoList } = this.state;
    let index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    this.setTodoList(todoList);
  };
  onFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>My Todo List</h1>
        </header>
        <Form onAdd={this.addTodo} onFilterChange={this.onFilterChange} />
        <TodoList
          todoList={this.state.todoList}
          filter={this.state.filter}
          onCompletedTodo={this.onCompletedTodo}
          onDeleteTodo={this.onDeleteTodo}
        />
      </div>
    );
  }
}

export default App;
