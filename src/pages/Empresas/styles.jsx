import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
  padding: 0;
  margin: 0;
`;

export const Empresas = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
  gap: 1em;

  .createButton {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }
`;
