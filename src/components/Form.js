import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }
  inputTextHandler = (e) => {
    let inputText = e.target.value;
    this.setState({ inputText });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state.inputText);
    this.props.onAdd(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.inputText}
          onChange={this.inputTextHandler}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              this.submitHandler(event);
            }
          }}
          type="text"
          className="todo-input"
        />
        <button onClick={this.submitHandler} className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={this.props.onFilterChange}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
