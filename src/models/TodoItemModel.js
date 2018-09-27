import { observable } from "mobx";

export default class TodoItemModel {
  @observable Title;
  @observable IsFinished = false;

  constructor(title) {
    this.Title = title;
  }
}
