import React, { useState, useRef } from "react";
import styled from "styled-components";
import ToDoHeader from "../components/ToDoHeader";
import ToDoInsert from "../components/ToDoInsert";
import ToDoList from "../components/ToDoList";
import ToDoFooter from "../components/ToDoFooter";

const Home = () => {
  const [data, setData] = useState([]);
  const no = useRef(data.length + 1);

  //추가
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text: text, checked: false}]);
  }

  //삭제
  const onDel = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  //수정
  const onMod = (id, text, checked) => {
    //빈값이면 삭제
    if (text.trim() === "") {
      onDel(id);
      return;
    }
    setData(data.map(item => item.id === id ? { ...item, text: text, checked: checked } : item));
  }

  //완료 된 todo 삭제
  const onClear = () => {
    setData(data.filter((item) => !item.checked));
  }

  return (
    <>
      <ToDoHeader />
      <ToDo>
        <ToDoInsert onAdd={onAdd} />
        <ToDoList data={data} onDel={onDel} onMod={onMod} onClear={onClear} type="All" />
      </ToDo>
      <ToDoFooter />
    </>
  );
}

export default Home;

const ToDo = styled.div`
  background: #fff;
  margin-bottom: 40px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;