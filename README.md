# [Proshop-eComm-website](https://mernproshopapp12.herokuapp.com/)

<img alt="Proshop eCommerce website" src="https://user-images.githubusercontent.com/65386350/96954047-3521ce00-1510-11eb-8e33-46309c9d4f43.jpg">

## Overview

Hello 👋, Welcome to my project of Proshop E-Commerce website which was built with MERN stack. This includes some basic functionality of a eCommerce platform features like Authentication, Product search, Top products carousel, Full featured shopping cart with PayPal & credit/debit payment method, Pagination, Product rating and review system, Admin area to manage customers,products & orders.

Tech stack used in this project -

- JavaScript Frontend Library: **React**
- Navigation: **React Router**
- State management: **Redux**
- Styling: **React Bootstrap**
- NodeJs Backend Framework: **Express**
- Database: **MongoDB**

This project was built as practice from course of Udemy ([MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce/)). 

## Prerequisites for this project

- One should have a Mongo URI for MongoDB connection, [PayPal client Id](https://developer.paypal.com/api/rest/), JWT Secret ready.

## Environment Variables

Finally one should have file named `.env` with all the config setup as follows

```js
// .env
NODE_ENV = development
PORT = 5000
MONGO_URI = [MONGO URI]
JWT_SECRET = [JWT SECRET]
PAYPAL_CLIENT_ID = [PAYPAL CLIENT ID]
```

## How to install this project

1. Clone the project using the command `git clone https://github.com/vtejaeta/Proshop-eComm-website.git`
2. Move into the file directory you wish to run using `cd {folder_name}`.
3. Use the following command `npm install` or `yarn` to install the dependencies.
4. Navigate to frontend folder and try installing dependencies for frontend folder using the same command which is used earlier in Step-3.
5. After coming out from frontend folder path, that is in home directory, now you can run `npm run dev` or `yarn dev` to run the app in the development mode which runs frontend as well as backend at the same time using [concurrently](https://www.npmjs.com/package/concurrently) npm package. It can be viewed in browser at `http:localhost:3000`. Backend will be running at the `PORT` number you specified in `.env` file.
6. For bundling, navigate to frontend folder path and try running `npm run build` or `yarn build` which optimises build for better performance

### Questions

For questions related to using the project, please reachout to me through

- [Twitter](https://twitter.com/vtejaeta9493)

