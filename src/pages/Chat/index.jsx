import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { Button, Container, EmpresaLogo, Footer } from "./styles";
import Logo from "../../assets/imgs/Logo.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import history from "../../navigation/history";

const Chat = () => {
  const { userId } = useContext(Context);
  return (
    <Container>
      <header>
        <EmpresaLogo src={Logo} />
        <Button>Limpar conversas encerradas</Button>
      </header>

      <main>
        <div className="main-text">
          <h1>Sem conversas</h1>
          <h1>ativas</h1>

          <h2>Aguarde :)</h2>
        </div>
      </main>

      <Footer>
        <div className="home" onClick={() => history.push("/home")}>
          <AiFillHome size={50} />
        </div>
        <div className="chat" onClick={() => history.push("/chat")}>
          <BsFillChatFill size={50} />
        </div>
        <div className="profile" onClick={() => history.push("/profile")}>
          <FaRegUserCircle size={50} />
        </div>
      </Footer>
    </Container>
  );
};

export default Chat;
