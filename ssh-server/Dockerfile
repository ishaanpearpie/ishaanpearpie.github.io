FROM golang:alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build valid static binary
RUN CGO_ENABLED=0 GOOS=linux go build -o ssh-server .

FROM scratch

WORKDIR /

COPY --from=builder /app/ssh-server /ssh-server

# Copy empty directory for data volume if needed (though volume mount handles it)
# COPY --from=builder /app/data /data 

ENV HOST_KEY_PATH=/data/id_ed25519

EXPOSE 22

ENTRYPOINT ["/ssh-server"]
