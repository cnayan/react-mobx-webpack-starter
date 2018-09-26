import { observable, computed, action } from "mobx";

import TodoItemModel from "./TodoItemModel";

export default class TodoCollectionModel {
  @observable Items = [];

  @computed get unfinishedTodoCount() {
    return this.Items.filter(item => !item.IsFinished).length;
  }

  @action AddTodo(title) {
    this.Items.push(new TodoItemModel(title));
  }
}
