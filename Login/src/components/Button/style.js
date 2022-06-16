import styled from "styled-components";

export const Button = styled.button`
  width: 367px;
  height: 65px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  ${``}
`;