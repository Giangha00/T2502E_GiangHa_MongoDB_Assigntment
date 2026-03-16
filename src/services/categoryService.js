const categoryModel = require("../models/categoryModel");

exports.get = async () => {
  try {
    const categories = await categoryModel.find();
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getById = async (id) => {
  try {
    const category = await categoryModel.findById(id);
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.create = async (categoryData) => {
  try {
    const newCategory = new categoryModel(categoryData);
    return await newCategory.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.update = async (id, categoryData) => {
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      categoryData,
      { new: true },
    );
    return await updatedCategory.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.delete = async (id) => {
  try {
    const deletedCatefory = await categoryModel.findByIdAndDelete(id);
    return deletedCatefory;
  } catch (error) {
    throw new Error(error.message);
  }
};
