const buddyModel = require("../models/buddyModel");
const categoryModel = require("../models/categoryModel");

exports.get = async () => {
  try {
    const buddies = await buddyModel.find().populate("category");
    return buddies;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getById = async (id) => {
  try {
    const buddy = await buddyModel.findById(id).populate("category");
    return buddy;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.create = async (buddyData) => {
  try {
    await categoryModel.findById(buddyData.category);
    const newBuddy = new buddyModel(buddyData);
    return await newBuddy.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.update = async (id, buddyData) => {
  try {
    if (buddyData.category) {
      await categoryModel.findById(buddyData.category);
    }
    const updatedBuddy = await buddyModel.findByIdAndUpdate(id, buddyData, {
      new: true,
      runValidators: true,
    });
    return updatedBuddy;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.delete = async (id) => {
  try {
    const deletedBuddy = await buddyModel.findByIdAndDelete(id);
    return deletedBuddy;
  } catch (error) {
    throw new Error(error.message);
  }
};
