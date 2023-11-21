const { MongoClient } = require('mongodb');
require('dotenv').config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'db_prueba';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  /* const prueba = db.collection('prueba');
  console.log(await prueba.find({}).toArray()); */

  // the following code examples can be pasted here...

  return db;
}

module.exports = main;