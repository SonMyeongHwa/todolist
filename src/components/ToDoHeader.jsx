import React from "react";
import styled from "styled-components";

const ToDoHeader = () => {
  return (
    <>
      <Title>todos</Title>
    </>
  );
};

export default ToDoHeader;

const Title = styled.h1`
  color: rgba(175, 47, 47, 0.15);
  text-align: center;
  font-size: 100px;
  font-weight: normal;
  margin: 10px 0;
`;