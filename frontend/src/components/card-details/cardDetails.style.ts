import styled from "styled-components";

export const ContainerDetails = styled.div`
  max-width: 900px;
  margin: 0 auto
`

export const ImageGridContainer = styled.div`
  display: flex;
  max-width: 900px;
  max-height: 700px;
  width: 100%;
  margin: 0 auto
`;

export const LeftImage = styled.div`
  width: 50%;
  max-height: 700px;
  padding:4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajuste para manter a proporção */
    border-radius: 8px;
  }
    
     &:hover {
    transform: scale(1.02);
  }
`;

export const RightImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column; /* Coloca as imagens empilhadas */
`;

export const RightImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 8px;
  padding:4px;

     &:hover {
    transform: scale(1.02);
  }
`;