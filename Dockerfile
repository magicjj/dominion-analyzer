FROM ubuntu:20.04 as dev
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -y update && apt-get -y install curl nodejs npm git

COPY . /app/src
WORKDIR /app/src/analyzer

RUN npm install

CMD [ "npm", "run", "start" ]
