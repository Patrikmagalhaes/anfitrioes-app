import { TitleHero } from "../hero/Hero.style";
import { ErrorImage, ErrorWrapper } from "./Error.style";

export const ErrorMessage = () => {
  return (
    <ErrorWrapper>
      <ErrorImage
        src={"../src/assets/sem-resultados.png"}
        alt="No results"
      />
      <TitleHero>Acomodações indisponiveis para essa região...</TitleHero>
    </ErrorWrapper>
  );
};
