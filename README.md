# Expensify-App

A web app to manage expenses, based on a course from [Udemy](https://www.udemy.com/react-2nd-edition/) (React, Redux, Jest, Enzyme, Firebase, Heroku).

[Demo available here](https://prstbt-expensify.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the project:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) account
- A [Heroku](https://www.heroku.com/) account with a project


### Installing

```
git clone git@github.com:proustibat/expensify-app.git
cd expensify-app
yarn install
```

#### Firebase configuration

**Database**

[Create](https://console.firebase.google.com/) 2 real time database projects (one for real data, one for unit tests data). 

For each of them, in the rules, paste the rules provided in `firebase.database.rules.json`.


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
Paste the credentials you get when you click on project parameters (the real database project) then add to your web application.

```
// .env.test
FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FIREBASE_AUTH_DOMAIN=app-test-name.firebaseapp.com
FIREBASE_DATABASE_URL=https://app-test-name.firebaseio.com
FIREBASE_PROJECT_ID=app-test-name
FIREBASE_STORAGE_BUCKET=app-test-name.appspot.com
FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
```
Paste the credentials you get when you click on project parameters (the unit tests database project) then add to your web application.

Never commit these files !

Finally configure rules on your Firebase console as given in `firebase.database.rules.json` for the real production database.

**Authentication**
In your dashboard, authentication part, configure a connection mode to allow Google provider.


#### Heroku configuration
Create an app in your [dashboard account](https://dashboard.heroku.com/) then follow instructions given by Heroku: 

```
heroku git:remote -a <your-heroku-app-name>
```

To be sure heroku remotes urls are ok:
```
git remote -v 
```

You'll need environment variables in Heroku with your Firebase credentials:

```
heroku config:set FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FIREBASE_AUTH_DOMAIN=app-test-name.firebaseapp.com FIREBASE_DATABASE_URL=https://app-test-name.firebaseio.com FIREBASE_PROJECT_ID=app-test-name FIREBASE_STORAGE_BUCKET=app-test-name.appspot.com FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
```
You can run `heroku config` to check the variables are ok with your own credentials.


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
yarn deploy
```

It opens an url like this: https://your-heroku-app-name.herokuapp.com/

**Last step:**
In your firebase dashboard, you need to authorize your heroku app url in authentication > Connection Mode > Allowed Domains :
add it and it's ok!
