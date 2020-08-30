[![Build Status](https://travis-ci.org/josimar-jr/api_nodejs_mongo_exploration.svg?branch=master)](https://travis-ci.org/josimar-jr/api_nodejs_mongo_exploration) [![codecov](https://codecov.io/gh/josimar-jr/api_nodejs_mongo_exploration/branch/master/graph/badge.svg)](https://codecov.io/gh/josimar-jr/api_nodejs_mongo_exploration)


# api nodejs + mongo collections exploration
This repository solves the challenge for searching data in mongodb collections receiving the properties in a POST request.

The properties might be:
- collection name, the ones accepted are `Product`, `Record`, `CustomDocument` and `Example`
- start and end dates to apply as filter, considering the field `createdAt`
- min and max counts, internal value to relate to the `count` property with different structure such as array and number

## Accessing production environment
The application is running on the web url: https://api-node-mongo-expl-josimar-jr.herokuapp.com/

To execute the request against the production environment run 
```
curl --location --request POST 'https://api-node-mongo-expl-josimar-jr.herokuapp.com/fetch/Product' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json; charset=UTF-8' \
--data-raw '{
    "startDate": "2019-01-26",
    "endDate": "2020-02-02",
    "minCount": 50,
    "maxCount": 55
}'
```
or import the collections in the [resources folder](./resources/postman.zip) to the postman and use the one with heroku in the name.

## Running dev environment
To run the application in development mode it is required:
- `Node` major version 12 or superior, recommended major version 14
- `Npm` major version 6
- `Mongodb` instance with available read permission (permission to run `find` method through `mongoose`) or `docker` and `docker-compose` available to get up and running a local/ephemeral mongodb instance
- `MongoDb compass` installed to restore the base data. The data used in the application is available in the [file](./resources/mongodb_data.zip)
- A tool like `postman`, `insomnia`, `soapui` or `curl` to perform the requests

Steps to have de app running in dev mode with local `mongodb` instance.
```
git clone repo_url app_folder
cd app_folder
npm install
docker-compose up -d
```
There is one required environment variable and to provide that create a `.env` file.
```
touch .env
```
Fill this file with a content such as:
```
PORT=3020
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/getir-test #change this connection string accordingly to your environment
```
To run the application locally connecting to any other MongoDb instance, provide the mentioned environment variable with the connection string.

```
npm start
```

The application can be ensure to be running by:
- accessing the root path `GET localhost:3020/` or healthcheck path `GET localhost:3020/healthcheck`
- performing request in the endepoint `POST /fetch/Product` with suitable body

There is also in the [resource folder](./resources/postman.zip) a postman collection to be imported and perform the resquest against the dev environment.
