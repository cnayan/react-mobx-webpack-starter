import React from "react";
import { observer } from "mobx-react";

const TodoItem = observer(({ Model }) => (
  <li>
    <input
      type="checkbox"
      checked={Model.IsFinished}
      onChange={() => Model.IsFinished = !Model.IsFinished}
    />
    {Model.Title}
  </li>
));

export default TodoItem;
