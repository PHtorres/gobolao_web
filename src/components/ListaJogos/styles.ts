import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;
  width: 600px;
  @media(max-width: 750px) {
    width: 100%;
  }
  /* @media(max-width: 750px) {
    width: 500px;
  }

  @media(max-width: 550px) {
    width: 430px;
  }

  @media(max-width: 415px) {
    width: 100%;
  } */
`;

export const ItemJogo = styled.li`
list-style:none;
`;
