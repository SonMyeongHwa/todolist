import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import { GoCircle } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import { MdClose } from "react-icons/md";

const ToDoListItem = ({ item, onDel, onMod }) => {
  const { id, text, checked } = item;
  const inputRef = useRef();
  const [isChecked, setIsChecked] = useState(checked);
  const [isEdit, setIsEdit] = useState(false);
  const [insertText, setInsetText] = useState(text);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
      // 커서를 맨 뒤로 이동
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [isEdit]);
  
  //todo 체크
  const handleCheck = () => {
    setIsChecked(prevCheck => !prevCheck);
    onMod(id, insertText, !isChecked);
  }

  //todo 더블클릭 시 수정
  const handleDoubleClick = (e) => {
    setIsEdit(true);
    window.getSelection().removeAllRanges(); //더블클릭 시 input 드래그 방지
  }

  //todo input 수정
  const handleChange = (e) => {
    setInsetText(e.target.value);
  };

  //input 포커스 아웃
  const handleOnBlur = (e, id) => {
    setIsEdit(false);
    onMod(id, e.target.value, isChecked);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnBlur(e, id);
    }
  };

  return (
    <ListItem
      className={`${isChecked ? "completed" : ""} ${isEdit ? "editing" : ""}`}
    >
      <div>
        {!isEdit &&
          (isChecked ? (
            <CheckCircle onClick={handleCheck} />
          ) : (
            <Circle onClick={handleCheck} />
          ))}
        {isEdit ? (
          <Insert
            type="text"
            value={insertText}
            onBlur={(e) => handleOnBlur(e, id)}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, id)}
            ref={inputRef}
          />
        ) : (
          <TodoText onDoubleClick={handleDoubleClick}>{text}</TodoText>
        )}
        {!isEdit && <Delete onClick={() => onDel(id)} />}
      </div>
    </ListItem>
  );
}

export default ToDoListItem;

const ListItem = styled.li`
  position: relative;
  border-bottom: 1px solid #ededed;
  cursor: default;

  &.completed {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  &.editing {
    color: inherit;
    border-bottom: none;
  }
`;

const circleStyles = `
  position: absolute;
  font-size: 30px;
  margin: 14px 10px;
`;

const CheckCircle = styled(GoCheckCircle)`
  ${circleStyles}
  color: #5dc2af;
`;

const Circle = styled(GoCircle)`
  ${circleStyles}
  color: #e6e6e6;
`;

const TodoText = styled.p`
  box-sizing: border-box;
  padding: 12px 16px 12px 60px;
  margin: 0px;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  color: inherit;
  font-weight: inherit;
  transition: color 0.4s;
`;

const Insert = styled.input`
  box-sizing: border-box;
  padding: 12px 16px;
  margin-left: 43px;
  width: 506px;
  font-size: 24px;
  line-height: 1.4em;
  color: inherit;
  font-weight: inherit;
  border: 1px solid #999;
  outline: none;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Delete = styled(MdClose)`
  display: none;
  position: absolute;
  bottom: 0px;
  right: 10px;
  padding: 10px;
  margin: 9px 0;
  font-size: 20px;
  color: #cc9a9a;
  transition: color 0.2s ease-out;

  ${ListItem}:hover & {
    display: block;
  }

  &:hover {
    color: #af5b5e;
  }
`;