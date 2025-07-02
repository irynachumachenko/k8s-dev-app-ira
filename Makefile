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

run-dev:
	docker run -d \
		--name docker-test-dev-container \
		-p 4321:1234 \
		-v ./logs:/srv/app/logs \
		docker-test-dev

run-prod:
	docker run -d \
		--name docker-test-prod-container \
		-p 4321:1234 \
		-v ./logs:/srv/app/logs \
		docker-test-prod

start:
	docker start docker-test-vite-container

clean:
	docker rm -f docker-test-vite-container