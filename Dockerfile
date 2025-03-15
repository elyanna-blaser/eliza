# Use a specific Node.js version for better reproducibility
FROM node:23.3.0-slim AS builder

# Install pnpm globally and necessary build tools
RUN npm install -g pnpm@9.15.4 && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
    git \
    python3 \
    python3-pip \
    curl \
    node-gyp \
    ffmpeg \
    libtool-bin \
    autoconf \
    automake \
    libopus-dev \
    make \
    g++ \
    build-essential \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    openssl \
    libssl-dev libsecret-1-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Clone the repository
COPY . /app/eliza

WORKDIR /app/eliza

# List files to ensure package.json is present
RUN echo "Listing files in /app/eliza:" && ls -la

# Set Python 3 as the default python
RUN ln -sf /usr/bin/python3 /usr/bin/python

# Install dependencies
RUN pnpm install

# Build the project
RUN pnpm run build && pnpm prune --prod

# Final runtime image
FROM node:23.3.0-slim

# Install runtime dependencies
RUN npm install -g pnpm@9.15.4 && \
    apt-get update && \
    apt-get install -y \
    git \
    python3 \
    ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy built artifacts and production dependencies from the builder stage
COPY --from=builder /app/eliza/package.json ./
COPY --from=builder /app/eliza/pnpm-workspace.yaml ./
COPY --from=builder /app/eliza/.npmrc ./
COPY --from=builder /app/eliza/turbo.json ./
COPY --from=builder /app/eliza/node_modules ./node_modules
COPY --from=builder /app/eliza/agent ./agent
COPY --from=builder /app/eliza/client ./client
COPY --from=builder /app/eliza/lerna.json ./
COPY --from=builder /app/eliza/packages ./packages
COPY --from=builder /app/eliza/scripts ./scripts
COPY --from=builder /app/eliza/characters ./characters

# Expose necessary ports
EXPOSE 3000 5173

# Command to start the application
CMD ["sh", "-c", "pnpm start & pnpm start:client"]