import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 24px;
    padding-top: 36px;
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

export const GridCard = styled.div`
    display: grid;
    grid-template-columns: auto ;
 gap:15px;
    @media (min-width: 576px) {
    grid-template-columns: repeat(2, calc(50% - 15px));
     
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, calc(33% - 15px));
     
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, calc(25% - 15px));
     
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, calc(20% - 15px));
     
  }
`