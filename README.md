# Projeto Anfitriões

Este projeto é uma aplicação web com **frontend em React** e **backend em Flask**, ambos orquestrados com Docker. A aplicação gerencia acomodações e permite buscar e filtrar por cidade.

## Tecnologias Utilizadas

- **Frontend**: React, Vite
- **Backend**: Flask, Python
- **Banco de Dados**: Não utilizado
- **Docker**: Para orquestrar a aplicação

## Instruções para Execução

Este projeto utiliza **Docker** para facilitar a execução, sem a necessidade de instalar dependências manualmente na sua máquina.

### Passos:

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>

2. **Inicie o projeto com Docker**:

   ```bash
   docker-compose up --build

Esse comando vai construir as imagens e iniciar os containers para o frontend e backend.

3. **Acessando a aplicação**:

O frontend estará disponível em: http://localhost:5173
O backend estará disponível em: http://localhost:5000


# #Como Funciona

Frontend (React): Interface de usuário para gerenciar acomodações.

Backend (Flask): API que fornece as acomodações.
GET /acomodacoes: Retorna todas as acomodações.
GET /acomodacoes?cidade={nome}: Filtra as acomodações pela cidade.
GET /acomodacoes/id Filtra as acomodações por ID.
