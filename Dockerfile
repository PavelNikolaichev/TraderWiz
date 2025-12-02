FROM node:22.21.0-alpine AS builder
WORKDIR /app

ARG VITE_MARKET_STREAM_URL
ENV VITE_MARKET_STREAM_URL=$VITE_MARKET_STREAM_URL

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build
RUN pnpm prune --prod

FROM node:22.21.0-alpine AS runner
WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]