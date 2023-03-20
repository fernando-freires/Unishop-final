import styled from 'styled-components';

export const Tabela = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .criaEmpresa {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1em;
  }
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Columns = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e4e4e4;

  h1 {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Empresa = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e4e4e4;

  h1 {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const CRUD = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  justify-content: center;
  align-items: center;
`;

export const Aviso = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  button {
    width: 350px;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    padding: 0.5em;
  }
`;

export const Mensagem = styled.h1`
  width: 700px;
  font-weight: 900;
  font-size: 60px;
  line-height: 65px;
  text-align: center;
  color: #000000;
  margin-bottom: 0.2em;
`;
