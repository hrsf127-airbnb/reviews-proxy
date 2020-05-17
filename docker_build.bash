docker build -t dbnb-proxy .
docker run -d -p 4000:4000 -v  $(pwd):/src/app --name dbnb-proxy dbnb-proxy:latest