import { useContext, useEffect, useState } from "react";
import { TypeData } from "../../types/acomodacoes";
import { Link } from "react-router-dom";
import {
  CardBox,
  CardText,
  CardTitle,
  IconHeart,
  ImageWrapper,
  TextWrapper,
} from "./CardAccommodation.style";

import { FavoriteContext } from "../../context/FavoriteContext";

export const Card = ({ data }: TypeData) => {
  const [favorite, setFavorite] = useState(false);
  const { setcountFavorites } = useContext(FavoriteContext);

  useEffect(() => {
    if (localStorage.getItem(data.id) === null) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }, [data.id]);

  const addFavorite = (id: string) => {
    localStorage.setItem(id, JSON.stringify(data));
    setFavorite(true);

    setcountFavorites((state) => {
      const favorite = state + 1;
      localStorage.setItem("TotalFavorites", String(favorite));
      return favorite;
    });
  };

  const removeFavorite = (id: string) => {
    localStorage.removeItem(id);
    setFavorite(false);

    setcountFavorites((state) => {
      const favorite = state - 1;
      localStorage.setItem("TotalFavorites", String(favorite));
      return favorite;
    });
  };

  return (
    <>
      <CardBox>
        <Link to={`/details/${data.id}`}>
          <ImageWrapper>
            <img src={data.imagem} />
          </ImageWrapper>
        </Link>
        <div>
          <Link to={`/details/${data.id}`}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <TextWrapper>
                <CardTitle>{data.nome}</CardTitle>
                <CardText>{data.localizacao}</CardText>
                <CardText>R$ {data.preco_noite},00</CardText>
              </TextWrapper>
            </div>
          </Link>

          {favorite === false ? (
            <IconHeart
              onClick={() => addFavorite(data.id)}
              src={"../src/assets/contorno-coracao.png"}
            />
          ) : (
            <IconHeart
              onClick={() => removeFavorite(data.id)}
              src={"../src/assets/coracao.png"}
            />
          )}
        </div>
      </CardBox>
    </>
  );
};
