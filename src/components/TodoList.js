import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { todoList } = this.props;
    switch (this.props.filter) {
      case "completed":
        todoList = todoList.filter((x) => x.completed === true);
        break;
      case "uncompleted":
        todoList = todoList.filter((x) => x.completed !== true);
        break;
      default:
    }
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todoList.map((todo) => (
            <div className="todo" key={todo.id}>
              <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.text}
              </li>
              <button
                onClick={() => this.props.onCompletedTodo(todo)}
                className="complete-btn"
              >
                <i className="fas fa-check"></i>
              </button>
              <button
                onClick={() => this.props.onDeleteTodo(todo)}
                className="trash-btn"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
