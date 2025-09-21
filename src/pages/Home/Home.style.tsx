import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 75px;
  padding-bottom: 75px;
  padding-left: 7%;
  padding-right: 7%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  display: flex;
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  padding-top: 25px;
  padding-left: 3px;
  padding-right: 10px;
  padding-bottom: 25px;
`;

export { Container, PageContent, SidePanel };
