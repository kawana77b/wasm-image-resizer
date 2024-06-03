FROM node:22-bullseye-slim

ENV RUSTUP_HOME=/usr/local/rustup \
  CARGO_HOME=/usr/local/cargo \
  PATH=/usr/local/cargo/bin:$PATH

RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates build-essential  \
  && curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf > rustup.sh && sh rustup.sh -y \
  && rm rustup.sh \
  && cargo install wasm-pack

WORKDIR /app

COPY . .

RUN npm install -g pnpm \
  && pnpm install \
  && pnpm run link \
  && pnpm run build

CMD [ "/bin/sh" ]
