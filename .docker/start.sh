echo "Creating network..."
docker network create nginx-proxy-network
echo "Network created!"

# start the container
echo "Restarting docker"
docker-compose stop
docker-compose up -d
echo "Docker restarted"
