# Basis: empfohlene Node-Version 20
FROM node:20-alpine as base

# Systemabhängigkeiten
RUN apk add --no-cache bash git openssh

# Arbeitsverzeichnis im Container
WORKDIR /app

# Projektdateien kopieren (Monorepo-Kontext)
COPY . .

# pnpm installieren
RUN corepack enable && corepack prepare pnpm@9.14.4 --activate

# Abhängigkeiten installieren
RUN pnpm install --frozen-lockfile

# Builder-Abhängigkeiten explizit auflösen
WORKDIR /app/apps/builder

# Build ausführen (optional, falls Build erforderlich ist)
RUN pnpm build

# 🏁 Startphase
FROM node:20-alpine as runner

WORKDIR /app

# Nur das Nötigste mitnehmen
COPY --from=base /app .

# Setze Umgebung auf Produktion
ENV NODE_ENV=production
ENV PORT=3000

# Exponiere Port (kann durch Reverse Proxy erreichbar gemacht werden)
EXPOSE 3000

# Startbefehl
WORKDIR /app/apps/builder
CMD ["pnpm", "start"]
