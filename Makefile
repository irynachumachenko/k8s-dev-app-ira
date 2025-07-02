buildx-dev:
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-f deploy/docker/Dockerfile \
		--target dev \
		-t rushinside/docker-vite-dev:1.2.0 \
		--push \
		.

buildx-prod:
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-f deploy/docker/Dockerfile \
		--target prod \
		-t rushinside/docker-vite-prod:1.1.0 \
		--push \
		.
