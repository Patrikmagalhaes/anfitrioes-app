import { FooterContainer, FooterWrapper, Logo, TextFooter } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo src={"../src/assets/afitrioes.png"} alt="Logo" />
        <TextFooter>Developed by Patrik Magalhães</TextFooter>
      </FooterWrapper>
    </FooterContainer>
  );
};
