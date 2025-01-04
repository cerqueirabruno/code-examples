# nextcloud
docker run -d \
	-v nextcloud:/var/www/html \
	-v apps:/var/www/html/custom_apps \
	-v config:/var/www/html/config \
	-v data:/var/www/html/data \
	-p 8080:80 nextcloud

# mysql
docker run --name nome-container -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:latest

# mongodb
docker run --name mongodb_v6 -d -p 27017:27017 mongo:6.0

# stirling pdf
docker run -d \
  -p 8080:8080 \
  -v /location/of/trainingData:/usr/share/tessdata \
  -v /location/of/extraConfigs:/configs \
  -v /location/of/logs:/logs \
  -e DOCKER_ENABLE_SECURITY=false \
  -e INSTALL_BOOK_AND_ADVANCED_HTML_OPS=false \
  -e LANGS=en_GB \
  --name stirling-pdf \
  frooodle/s-pdf:latest