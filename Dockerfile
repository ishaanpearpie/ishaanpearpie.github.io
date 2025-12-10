FROM oven/bun:1 AS base
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build the application
RUN bun run build

# Production image
FROM oven/bun:1-alpine AS release
WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist
COPY --from=base /app/scripts ./scripts
COPY --from=base /app/src ./src
COPY --from=base /app/package.json ./package.json

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Start both the server and the background monitor
CMD ["sh", "-c", "bun ./dist/server/entry.mjs & bun scripts/monitor-github.ts"]
