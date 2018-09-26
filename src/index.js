import React from "react";
import { render } from "react-dom";
// import DevTools from "mobx-react-devtools";

import TodoCollection from "./components/TodoCollection";
import TodoCollectionModel from "./models/TodoCollectionModel";

const model = new TodoCollectionModel();

render(
  <div>
    {/* <DevTools /> */}
    <TodoCollection Model={model} />
  </div>,
  document.getElementById("root")
);

model.AddTodo("To Do item 1");
model.AddTodo("To Do item 2");
model.AddTodo("To Do item 3");

model.Items[2].IsFinished = true;

// window.store = model;
