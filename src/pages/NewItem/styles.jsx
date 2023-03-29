import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
  padding: 0;
  margin: 0;

  header {
    display: flex;
    height: 75px;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid #ccc;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em;

    .teste {
      margin-bottom: 2em;
    }
  }
`;

export const EmpresaLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 85px;
  background-color: transparent;
  margin-bottom: 35px;
  margin-top: 1.5em;
`;

export const Button = styled.button`
  width: 90px;
  height: 55px;
  border-radius: 20px;
  border: none;
  background-color: #2d840e;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  background-color: #aba5a5;
  display: flex;
  justify-content: center;

  .home,
  .chat,
  .profile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #241f1f;
  }

  .home {
    border-top: 5px solid #061349;
    color: #061337;
  }
`;

export const Inputs = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;

  label {
    font-style: normal;
    width: 290px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: #373737;
    text-align: left;
    margin-bottom: 3px;
  }

  input {
    box-sizing: border-box;
    width: 290px;
    height: 40px;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 25px;
    padding-left: 1em;
  }

  input:hover {
    transition: 0.3s;
    border-bottom: 2px solid #451fed;
    height: 45px;
  }
`;

export const ButtonEdit = styled.button`
  width: 190px;
  height: 55px;
  border-radius: 20px;
  border: none;
  background: #045bad;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 1.5em;
`;
