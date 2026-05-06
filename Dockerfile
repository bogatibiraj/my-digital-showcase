# syntax=docker/dockerfile:1.7

# ---------- Build stage ----------
FROM oven/bun:1.1-alpine AS build
WORKDIR /app

# Install deps (cached layer)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
RUN bun run build

# ---------- Runtime stage ----------
FROM oven/bun:1.1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

# Copy build output and runtime deps
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./package.json

EXPOSE 8080
CMD ["bun", "run", ".output/server/index.mjs"]