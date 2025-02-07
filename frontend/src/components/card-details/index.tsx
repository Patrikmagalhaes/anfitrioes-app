import { Container } from "../../styles/styles";
import { TypeData } from "../../types/acomodacoes";
import {
  CardText,
  CardTitle,
} from "../card-accommodation/CardAccommodation.style";
import { Header } from "../header";
import {
  ContainerDetails,
  ImageGridContainer,
  LeftImage,
  RightImage,
  RightImageContainer,
} from "./cardDetails.style";

export const CardDetails = ({ data }: TypeData) => {
  return (
    <>
      <Header />
      <Container>
        <ContainerDetails>
          <ImageGridContainer>
            <LeftImage>
              <img src={data.imagem} />
            </LeftImage>
            <RightImageContainer>
              <RightImage src={data.imagem} />
              <RightImage src={data.imagem} />
            </RightImageContainer>
          </ImageGridContainer>
          <CardTitle>{data.nome}</CardTitle>
          <CardText>{data.localizacao}</CardText>
          <CardText>R$ {data.preco_noite},00</CardText>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            exercitationem quidem sapiente molestias eos maxime eius
            dignissimos, fuga corporis numquam maiores voluptatibus voluptatum
            ullam incidunt blanditiis minus ducimus. Animi, quia.
          </p>
        </ContainerDetails>
      </Container>
    </>
  );
};
