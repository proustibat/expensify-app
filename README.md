# Expensify-App

A web app to manage expenses, based on a course from [Udemy](https://www.udemy.com/react-2nd-edition/) (React, Redux, Jest, Enzyme, Firebase, Heroku).

[Demo available here](https://crwdc-expensify.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the project:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) account with 2 projects (one for production data, one for tests data)
- A [Heroku](https://www.heroku.com/) account with a project


### Installing

```
git clone git@github.com:proustibat/expensify-app.git
cd expensify-app
yarn install
```

You need to create `.env.development` and `.env.test` files with your firebase credentials as follows:

```
// .env.development
FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_AUTH_DOMAIN=app-name.firebaseapp.com
FIREBASE_DATABASE_URL=https://app-name.firebaseio.com
FIREBASE_PROJECT_ID=app-name
FIREBASE_STORAGE_BUCKET=app-name.appspot.com
FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
```

```
// .env.test
FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_AUTH_DOMAIN=app-test-name.firebaseapp.com
FIREBASE_DATABASE_URL=https://app-test-name.firebaseio.com
FIREBASE_PROJECT_ID=app-test-name
FIREBASE_STORAGE_BUCKET=app-test-name.appspot.com
FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
```

Also configure rules on your Firebase console as given in `firebase.database.rules.json`.

## Watching

```
yarn dev-server
```
Open [http://localhost:8080/](http://localhost:8080/) in your browser.

## Running the tests
```
yarn test
```
You could also watch tests while you're working:
```
yarn test -- --watch
```

### Coding style tests

All tests are in `src/tests` with the same architecture that in `src` folders for each file.


## Deployment

It uses Heroku so be sure you're logged in and connect your code to the heroku repo.

```
yarn heroku:push
```
