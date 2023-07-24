const mongoose = require("mongoose");

// Connect to the MongoDB database
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net"
    );
    console.log(
      "Database connected : ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
