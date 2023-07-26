const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://tripuraripandit:Tripurari@cluster0.wxrbth1.mongodb.net/csvFile?retryWrites=true&w=majority';
// 'mongodb://127.0.0.1/csv-file-upload'
mongoose.connect(dbURL)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });