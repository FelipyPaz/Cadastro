import styled from "styled-components";
import Bg from "../../assets/Bg.svg";
/* import { Link } from "react-router-dom";
 */
export const Container = styled.div`
  background: url("${Bg}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;
export const Image = styled.img`
  margin-top: 30px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;

  color: #eeeeee;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  margin-left: 25px;
`;

export const Button = styled.button`
  width: 367px;
  height: 65px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  background: none;
  border-radius: 14px;
  border: 1px solid white;
  margin-top: 130px;
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
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 367px;
  height: 50px;
  border: none;
  outline: none;
  margin: 20px 0px 20px 0px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;

    color: #ffffff;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
