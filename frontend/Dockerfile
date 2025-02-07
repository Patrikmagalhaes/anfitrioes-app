# Usa a imagem oficial do Node.js
FROM node:latest

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos para o container
COPY . .

# Instala as dependências
RUN npm install

# Compila o projeto (se precisar)
RUN npm run build

# Expõe a porta 5173 (Vite)
EXPOSE 5173

# Comando para iniciar o Vite
CMD ["npm", "run", "dev"]
