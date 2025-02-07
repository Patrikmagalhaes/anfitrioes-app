import styled from "styled-components";

export const CardBox = styled.div`
  background: #fff;
  margin:10px;
  transition: transform 0.3s ease-in-out;
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  text-align: center;
  width: 100%; 
  overflowY: none;
  
  &:hover {
    transform: scale(1.02);
  }
`
export const ImageWrapper = styled.div`
 height: 100%;
  aspect-ratio: 1/1; 
  overflow: hidden;
  border-radius:10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-top-left-radius:10px;
  border-top-right-radius:10px;
`


export const TextWrapper = styled.div`
 text-align: left;
`

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 10px;
  color: black;
 text-transform: uppercase;
`

export const CardText = styled.p`
  font-size: 1rem;
  color: #6a6a6a;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-weight: bold;
`


export const IconHeart = styled.img`
width: 36px;
height: 36px;
aspectratio:1/1;
cursor: pointer;
  &:hover {
    transform: scale(1.50);
  }
`
