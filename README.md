# TMDb React app

Frontend application using [The Movie Database API](https://developers.themoviedb.org). Built with React. Not endorsed or certified by [TMDb](https://www.themoviedb.org).

Some of the stuff used:
* React
* Redux with Redux thunk
* React router v4
* Webpack 4
* Jest
* CSS modules

[![Build Status](https://travis-ci.org/lviit/themoviedb-react.svg?branch=master)](https://travis-ci.org/lviit/themoviedb-react)

## getting started
Install packages:
```
yarn install
```
Create .env file in the repo root and set your api key as API_KEY variable:

```
// .env
API_KEY=12345678901234567890
```
You can request an API key by logging in to your account on [TMDb](https://www.themoviedb.org/login) and clicking the "API" link in the left hand side bar of your account page.

Use webpack-dev-server for local development:
```
yarn dev-server
```
Build the app:
```
yarn build:dev
yarn build:prod
```

Run the server:
```
yarn serve
```

Run tests:
```
yarn test
```
TMdb api documentation can be found at: https://developers.themoviedb.org/3/getting-started
