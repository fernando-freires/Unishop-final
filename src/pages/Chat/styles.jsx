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
    background-color: #2828dcd4;
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 350px;
    border-radius: 30px;
    margin-top: 7em;
    box-shadow: 0 0 15px #534242;

    h1 {
      width: 100%;
      text-align: center;
    }

    h2 {
      text-align: center;
      margin-top: 2em;
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
  width: 150px;
  height: 55px;
  border-radius: 20px;
  border: none;
  background-color: #6e2709;
  color: #fff;
  font-size: 15px;
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

  .chat {
    border-top: 5px solid #061349;
    color: #061337;
  }
`;
