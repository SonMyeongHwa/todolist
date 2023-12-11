import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa6";

const ToDoInsert = ({ onAdd, onAllChk }) => {
  const inputRef = useRef();
  const [allCheck, setAllCheck] = useState(false);
  const [insertText, setInsetText] = useState("");

  const handleChange = (e) => {
    setInsetText(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd(insertText);
      setInsetText("");
      inputRef.current.focus();
    }
  }

  //전체 체크
  const handleAllCheck = () => {
    setAllCheck(prevCheck => !prevCheck);
  }

  return (
    <>
      <AngleDown onClick={handleAllCheck} />
      <Insert
        type="text"
        placeholder="What needs to be done?"
        value={insertText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </>
  );
}

export default ToDoInsert;

const AngleDown = styled(FaAngleDown)`
  position: absolute;
  font-size: 22px;
  color: ${(props) => (props.checked ? "#737373" : "#e6e6e6")};
  padding: 22px 15px;
`;

const Insert = styled.input`
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;
  width: 100%;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  outline: none; /* input 클릭 시 테두리 없애기 */
  font-size: 24px;
  line-height: 1.4em;
  color: inherit;

  &::placeholder {
    color: #e8e8e8;
    font-style: italic;
  }
`;