import styled from "styled-components";

export const DivSearchBar = styled.div`
max-width: 600px;
margin: 0 auto;
display:flex;

 position: relative;
 justify-content: end;
align-items: center;
border-radius: 26px;
margin-bottom: 50px;
`

export const InputSearch = styled.input`
padding:16px;
width:100%;
border-radius:26px;
border: none;
box-shadow: #959da5 0px 4px 8px;
font-size:1rem;
&:focus {
  outline: none;
}
`

export const IconSearch = styled.img`
position: absolute;
height: 36px;
cursor: pointer;
padding-right: 16px;

  &:hover {
    transform: scale(1.05);
  }
`
