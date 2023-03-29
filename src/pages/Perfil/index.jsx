import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import {
  Button,
  ButtonEdit,
  Container,
  EmpresaLogo,
  Footer,
  Inputs,
} from "./styles";
import Logo from "../../assets/imgs/Logo.png";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import history from "../../navigation/history";

const Perfil = () => {
  const { userId } = useContext(Context);
  return (
    <Container>
      <header>
        <EmpresaLogo src={Logo} />
        <Button onClick={() => history.push("/")}>Sair</Button>
      </header>

      <main>
        <FaRegUserCircle size={180} className="teste" />
        <Inputs>
          <label>Nome da loja</label>
          <input type="text" value="Loja da Bea" />
        </Inputs>
        <Inputs>
          <label>Atuação</label>
          <input type="text" value="Vendedora" />
        </Inputs>
        <Inputs>
          <label>E-mail</label>
          <input type="text" value="beatriz@gmail.com" />
        </Inputs>
        <ButtonEdit>Editar dados</ButtonEdit>
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

export default Perfil;
