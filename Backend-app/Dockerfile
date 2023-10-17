# Use a imagem base oficial do Node.js com a versão desejada
FROM node:16.20.1

# Crie o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos de configuração (package.json e package-lock.json) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que sua aplicação irá usar (substitua a porta 3000 pela porta correta)
EXPOSE 3030

# Comando para iniciar a aplicação (substitua pelo comando real da sua aplicação)
CMD ["npm", "start"]