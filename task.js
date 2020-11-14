import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const StyledTask = styled.div`
  background: white;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 8px;
`;

const Task = ({ item: { content, id }, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <StyledTask
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {content}
        </StyledTask>
      )}
    </Draggable>
  );
};

export default Task;
