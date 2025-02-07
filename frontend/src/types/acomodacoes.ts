export interface Acomodacao {
  id: string;
  nome: string;
  imagem: string;
  preco_noite: number;
  localizacao: string
}

export interface TypeData {
  data: Acomodacao
}

export interface TypeError {
  data: Acomodacao[];
}
