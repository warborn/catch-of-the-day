# Catch of the Day
Seafood market management application built with React (v16.2) and React Router (v4.2). 

The application allows the user to:
- Login into the app using Github or Twitter
- Create a new restaurant to manage
- View all of the existing seafood
- Create, Update and Delete seafood from the Inventory ***(only for the owner of the restaurant)***
- Add a product to his order
- Remove products from his order

View it live [here](https://wb-seafood-market.firebaseapp.com)


## Features
- Use of create-react-app
- CRUD functions
- Realtime updates
- Firebase backend
- Use of Local Storage
- OAuth authentication (Github & Twitter)
- Use of ES6 features
- Animation of React Components

## Instalation

Clone this repo
```sh
git clone https://github.com/warborn/catch-of-the-day.git
cd catch-of-the-day
```

Install all the dependencies
```sh
yarn install
```

Check it out on [http://localhost:3000/](http://localhost:3000)
```sh
yarn run start
```

Build the application for production
```sh
yarn run build
```

## Deployment

To deploy to Firebase you need to have installed the ```firebase-tools```. Execute the following command to install them globally
```sh
yarn global firebase-tools
```

Run the following commands to login into your firebase account and to initialize a firebase project

```sh
firebase login & firebase init
```

Use the following answers for the initial configuration:

- Firebase CLI features: **Hosting**
- What do you want to use as your public directory? (public) - **build**
- Configure as a single-page app (rewrite all urls to /index.html)? - ***yes***
-  File build/index.html already exists. Overwrite? - **N**

Then build the application for production using the ```yarn run build``` command

Finally deploy the application using the firebase deploy command
```sh
firebase deploy
```

