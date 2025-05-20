import { Container } from "../../styles/styles";
import { TypeData } from "../../types/acomodacoes";
import {
  CardText,

} from "../card-accommodation/CardAccommodation.style";
import { Header } from "../header";
import {
  CardTitleDetails,
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
          <CardTitleDetails>{data.nome}</CardTitleDetails>
          <CardText>{data.localizacao}</CardText>
          <CardText>R$ {data.preco_noite},00</CardText>
          <p style={{ fontSize: '2rem', paddingBottom: '10%', paddingTop:'5%', color:'#15005f' }}>
            Bem-vindo(a) ao seu novo lar! Este imóvel oferece o equilíbrio ideal entre conforto, praticidade e localização. Com espaços bem distribuídos, ele é perfeito para quem busca qualidade de vida, seja para morar sozinho(a), com a família ou compartilhar com amigos.<br/><br/>

            A propriedade conta com ambientes arejados, boa iluminação natural e estrutura funcional para o dia a dia. Localizada em uma região estratégica, próxima a comércios, serviços essenciais, transporte público e vias de acesso, ela proporciona conveniência e mobilidade.<br/><br/>

            Ideal para quem valoriza um ambiente tranquilo, seguro e pronto para receber você. Entre em contato para mais informações ou agendar uma visita!
          </p>
        </ContainerDetails>
      </Container>
    </>
  );
};
