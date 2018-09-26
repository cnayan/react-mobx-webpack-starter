import { observable } from "mobx";

export default class TodoItemModel {
  id = Math.random();
  @observable Title;
  @observable IsFinished = false;

  constructor(title) {
    this.Title = title;
  }
}
