import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./task";

const Container = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #eee;
  background: rgba(0, 0, 0, 0.01);
  min-height: 300px;
  width: 300px;
  border-radius: "5px";
`;
const Title = styled.h1`
  font-size: 18px;
  padding: 10px 20px;
`;
const TaskList = styled.div`
  padding: 0px 20px 20px 20px;
`;
const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((t, i) => (
              <Task index={i} item={t} key={i} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
