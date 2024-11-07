const mongoose = require("mongoose");
const { serverConfig } = require("./server-config");

const MONGO_URI = "mongodb://127.0.0.1:27017/tavel";

const startDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("DATABASE server is running ");
};

module.exports = {
  startDB,
};
