// //Connect to Mongo database
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// //your local database url
// const uri = 'mongodb://localhost/fitsphere';

// mongoose.set('useFindAndModify', false);
// mongoose.connect(process.env.MONGODB_URI || uri).then(
//   () => {
//     console.log('Connected to Mongo');
//   },
//   err => {
//     console.log('error connecting to Mongo: ');
//     console.log(err);
//   }
// );

// module.exports = mongoose.connection;

const mongoose = require("mongoose");
// const colors = require("colors");
mongoose.set('useFindAndModify', true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

module.exports = connectDB;
