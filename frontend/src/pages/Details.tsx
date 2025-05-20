import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Acomodacao } from "../types/acomodacoes";
import { CardDetails } from "../components/card-details";
import { Footer } from "../components/footer";
import { ErrorMessage } from "../components/error";

export default function Details() {
  const { id } = useParams();
  const [accommodantion, setAccommodantion] = useState<Acomodacao>();

  useEffect(() => {
    fetch(`https://anfitrioes-app-backend.onrender.com/acomodacoes/${id}`)
    .then(response => response.json())
    .then(data => setAccommodantion(data))


  }, [id]);
  return (
    <>
      {accommodantion ? (
        <CardDetails data={accommodantion} />
      ) : (
        <ErrorMessage/>
         
      )}
      <Footer/>
    </>
  );
}
