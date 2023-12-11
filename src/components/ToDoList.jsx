import React, {useState} from "react";
import styled from "styled-components";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ data, onDel, onMod }) => {
  const [itemCount, setItemCount] = useState(1);

  const handleDelete = () => {
    console.log("삭제")
  }

  return (
    <>
      <List>
        {data.map((item, index) => (
          <ToDoListItem key={index} item={item} onDel={onDel} onMod={onMod} />
        ))}
      </List>
      {data.length > 0 && (
        <Footer>
        <CountItem>{itemCount} item{itemCount > 1 ? "s" : ""} left</CountItem>
        <TypeWrap>
            <TypeButton><TypeLink href="#/" className={"selected"}>All</TypeLink></TypeButton>
          <TypeButton><TypeLink href="#/active">Active</TypeLink></TypeButton>
          <TypeButton><TypeLink href="#/completed">Completed</TypeLink></TypeButton>
        </TypeWrap>
        <ClearButton onClick={handleDelete}>Clear Completed</ClearButton>
      </Footer>
      )}
    </>
  );
}

export default ToDoList;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Footer = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const CountItem = styled.span`
  float: left;
`;

const TypeWrap = styled.ul`
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

const TypeButton = styled.li`
  display: inline;
`;

const TypeLink = styled.a`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover {
    border-color: rgba(175, 47, 47, 0.2);
  }

  &.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`;

const ClearButton = styled.button`
  position: relative;
  float: right;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;