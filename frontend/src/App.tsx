import { useEffect, useState } from "react";
import { Searchbar } from "./components/searchbar";
import { Acomodacao } from "./types/acomodacoes";
import { ErrorMessage } from "./components/error";
import { Container, GridCard } from "./styles/styles";
import { Card } from "./components/card-accommodation";
import { FavoriteContext } from "./context/FavoriteContext";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function App() {
  const [accommodantion, setAccommodantion] = useState<Acomodacao[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [countFavorites, setcountFavorites] = useState<number>(Number(localStorage.getItem("TotalFavorites")));

  const fetchAccommodantion = async (cidade?: string) => {
    let url = "https://anfitrioes-app-backend.onrender.com/acomodacoes";

    if (cidade) {
      url += `?cidade=${cidade}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setError(false);

      if (!response.ok) {
        setError(true);
      }

      setAccommodantion(data);
    } catch (erro) {
      console.error("Algo deu eraddo", erro);
    }
  };

  useEffect(() => {
    fetchAccommodantion();
  }, []);

  return (
    <>
      <FavoriteContext.Provider value={{ setcountFavorites, countFavorites }}>
        <Header />
        <Container>
          <Searchbar onSearch={fetchAccommodantion} />
          {error && <ErrorMessage/>}
          <GridCard>
            {accommodantion.length > 0 &&
              accommodantion.map((item) => <Card key={item.id} data={item} />)}
          </GridCard>
        </Container>
        <Footer/>
      </FavoriteContext.Provider>
    </>
  );
}
