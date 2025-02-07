import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap');

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
  }

body{
    background-color: #FFFF;
   font-family: "Fredoka", sans-serif;
   height: 100%;
   display: flex;
   flex-direction: column;
}
`;
