import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const CategoryImage = styled.img`
  width: 90px;
  height: 90px;
  box-sizing: border-box;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const CategoryBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const CategoryDescription = styled.p`
    display: flex;
    justify-content: center;
`;

export { Container, CategoryImage, CategoryBox, CategoryDescription };
