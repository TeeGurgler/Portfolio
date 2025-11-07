FROM node:22-alpine
WORKDIR /app

# Kopiere package.json und installiere die Abhängigkeiten.
COPY package*.json ./
RUN npm install

# Kopiere den restlichen Quellcode.
COPY . .

EXPOSE 5173

# Starte den Vite-Server und mache ihn im Netzwerk verfügbar.
CMD ["npm", "run", "dev", "--", "--host"]