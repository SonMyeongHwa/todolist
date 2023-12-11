import React from "react";
import styled from "styled-components";

const ToDoFooter = () => {
  return (
    <FooterWrap>
      <p>Double-click to edit a todo</p>
      <p>
        Created by <Link href="http://github.com/remojansen/">Remo H. Jansen</Link>
      </p>
      <p>
        Part of <Link href="http://todomvc.com">TodoMVC</Link>
      </p>
    </FooterWrap>
  );
};

export default ToDoFooter;

const FooterWrap = styled.div`
  color: #bfbfbf;
  font-size: 10px;
  text-align: center;
  margin-top: 70px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;