const mongoose = require("mongoose");

const buddySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tên thú cưng bắt buộc phải có"],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Danh mục bắt buộc phải có"],
    },
    age: {
      type: Number,
      required: [true, "Tuổi bắt buộc phải có"],
      min: [0, "Tuổi phải lớn hơn hoặc bằng 0"],
    },
    gender: {
      type: String,
      enum: ["Đực", "Cái"],
      required: [true, "Giới tính bắt buộc phải có"],
    },
    breed: {
      type: String,
      default: "Chưa xác định",
    },
    image: {
      type: String,
      default: "default-pet.png",
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Buddy", buddySchema);
