## Instant Offer
Instant Offer was made to cut down on the time it takes to repeatedly fill out an Purchase to Offer and Listing Contracts realty forms. Being mobile friendly and avalible 24/7, this product can cut down the time spent traveling back and forth from the office.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called instant_offer and load the database.sql file:

```
# createdb instant_offer
# psql instant_offer < database.sql
```

## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Built With
This version uses React, Redux, Express, Passport, jsPDF, React-signature-canvas, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Authors
Amran Ahmed
Mang Wan
Samuel Titiloye
Joseph Wan
Matthew Dunfee
