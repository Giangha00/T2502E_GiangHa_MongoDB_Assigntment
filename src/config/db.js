const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Đang kết nối đến MongoDB...");
    const uri = "mongodb://localhost:27017/";
    await mongoose.connect(uri);
    console.log("MongoDB kết nối thành công");
  } catch (error) {
    console.log("MongoDB kết nối thất bại:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
