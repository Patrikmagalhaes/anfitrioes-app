import { CountFavorites } from "../count-favorites";
import { Logo } from "../footer/Footer.style";
import { HeaderComponent } from "./Header.style";

export const Header = () => (
  <HeaderComponent>
    <a href={"http://localhost:5173/  "}>
      <Logo style={{ height: "100%" }} src={"../assets/afitrioes.png"} />
    </a>
    <CountFavorites/>
  </HeaderComponent>
);
