import { CountWrapper, FavoritesCount, HeartIcon } from "./Count.style";

export const CountFavorites = () => {
  return (
    <CountWrapper>
      <HeartIcon
        src={"../src/assets/coracao.png"}
        alt="Heart Icon"
      />
      <FavoritesCount>{localStorage.getItem("TotalFavorites")}</FavoritesCount>
    </CountWrapper>
  );
};
