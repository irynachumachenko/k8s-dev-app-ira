build:
	docker build \
		-f docker/Dockerfile \
		-t docker-test-vite \
		.

run:
	docker run -d \
		--name docker-test-vite-container \
		-p 4321:1234 \
		-v ./logs:/srv/app/logs \
		docker-test-vite

start:
	docker start docker-test-vite-container

clean:
	docker rm -f docker-test-vite-container