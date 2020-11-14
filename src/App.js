import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../column";
import intitial from "../data";
import "./styles.css";

export default function App() {
  const state = intitial;
  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
