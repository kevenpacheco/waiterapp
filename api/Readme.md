# WAITERAPP - API

## 📋 Table of contents

- [About](#about)
- [Step by step to use the application](#step-by-step-to-use-the-application)
- [Built with](#built-with)
- [Author](#author)

## 📃 About

The API features consist of:

- Create and list the products;
- Save product images and make them available statically;
- Create and list the categories, in addition to filtering products based on their category;
- Create, cancel and list a product, in addition to changing its status between WAITING, IN_PRODUCTION and DONE;

For the database, Mongo db, a non-relational database, was used.

## 🚀 Step by step to use the application

1 - Install the dependencies:

```
  npm install
```

2 - Run de server in development mode:

```
  npm run dev
```

By default the application runs on port 3001. But this can be changed by modifying the variable ``const port = 3001`` which is in the src/index.ts file.

To save and retrieve data from the database, mongodb must be running on port 27017

## 🔧 Built with

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Mongo](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- Websocket

## 🤵 Author

- [LinkedIn](https://www.linkedin.com/in/kevenpacheco/)
