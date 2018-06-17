// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log('unable to connect to db');
  }

  console.log('connected to db server');

  const db = client.db('TodoApp');

  db.collection('Todos').find({completed: true}).count().then( (count) => {
      console.log('documents', count);
    }, (err) => {
      console.log(err);
    })
  // client.close();
});
