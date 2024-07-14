FROM node:14

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 5000

# Comando para correr la aplicación
CMD [ "node", "server/app.js" ]

