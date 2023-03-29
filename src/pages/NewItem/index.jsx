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
import { BsFillChatFill, BsCardImage } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import history from "../../navigation/history";

const NewItem = () => {
  const { userId } = useContext(Context);
  return (
    <Container>
      <header>
        <EmpresaLogo src={Logo} />
        <Button onClick={() => history.push("/home")}>Voltar</Button>
      </header>

      <main>
        <BsCardImage size={130} className="teste" />
        <Inputs>
          <label>Nome do produto</label>
          <input type="text" />
        </Inputs>
        <Inputs>
          <label>Quantidade</label>
          <input type="number" />
        </Inputs>
        <Inputs>
          <label>Preço</label>
          <input type="number" />
        </Inputs>
        <Inputs>
          <label>Descrição</label>
          <input type="text" />
        </Inputs>
        <ButtonEdit onClick={() => history.push("/home")}>
          Inserir produto
        </ButtonEdit>
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

export default NewItem;
