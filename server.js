const express = require('express')
const main = require('./db')
const app = express()
require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hola Bienvenido!')
})

app.get('/prueba', async (req, res) => {
  const db = await main();
  const collection = db.collection('prueba');
  /* const prueba = await collection
  .find( { $and: [ { age: { $in: [ 20, 44 ] } }, { name: "Sebastian" } ] } )
  .toArray(); */
  const prueba = await collection
  .aggregate([
    {
        $match: { age: { $in: [ 20, 24, 44 ] } }
    },
    {
        $skip: 1
    },
    {
        $limit: 2
    },
    {
        $unset: [ "_id" ]
    },
    {
        $sort: { age: -1 }
    },
    {
        $set: { fullname: "Lindarte" }
    }
])
.toArray();
  res.send({prueba: prueba});
})

app.listen(port, /* async */ () => {
    /* await main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close()); */
  console.log(`app listening on port ${port}`)
})

