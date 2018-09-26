import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import TodoItem from "./TodoItem";

@observer class TodoCollection extends React.Component {
  @observable NewItemTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          Add a To Do Item:
          <input
            type="text"
            value={this.NewItemTitle}
            onChange={this.onInputChange}
          />
          <button type="submit"> + </button>
          &nbsp; To Do Items remaining: {this.props.Model.unfinishedTodoCount}
        </form>
        <ul>
          {
            this.props.Model.Items.map(todoModel => <TodoItem Model={todoModel} key={todoModel.id} />)
          }
        </ul>
      </div>
    );
  }

  @action onInputChange = e => {
    this.NewItemTitle = e.target.value;
  };

  @action onFormSubmit = e => {
    this.props.Model.AddTodo(this.NewItemTitle);
    this.NewItemTitle = "";
    e.preventDefault();
  };
}

export default TodoCollection;
