build-dev:
	docker build \
		-f docker/Dockerfile \
		-t docker-test-dev \
		--target dev \
		.
build-prod:
	docker build \
		-f docker/Dockerfile \
		-t docker-test-prod \
		--target prod \
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