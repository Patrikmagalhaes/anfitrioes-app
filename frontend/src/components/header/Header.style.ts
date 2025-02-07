import styled from "styled-components";

export const HeaderComponent = styled.header`
padding: 20px 24px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;

  @media (min-width: 576px) {
   flex-direction: row;
     
  }
`