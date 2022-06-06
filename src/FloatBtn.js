import React from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

const FloatingBtn = styled.div`
  position: fixed;
  line-height: 63px;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function FloatBtn() {
  return (
    <>
      <FloatingBtn>
        <FaChevronUp style={{ fontSize: "25px", color: "gray" }} />
      </FloatingBtn>
    </>
  );
}

export default FloatBtn;
