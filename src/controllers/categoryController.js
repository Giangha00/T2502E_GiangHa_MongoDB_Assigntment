const categoryService = require("../services/categoryService");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.get();
    res.render("category/list", { categories });
  } catch (error) {
    next(error);
  }
};

exports.renderCreateForm = async (req, res, next) => {
  res.render("category/create");
};

exports.createCategory = async (req, res, next) => {
  try {
    await categoryService.create(req.body);
    res.redirect("/admin/category/list");
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await categoryService.delete(req.params.id);
    res.redirect("/admin/category/list");
  } catch (error) {
    next(error);
  }
};

exports.renderDetail = async (req, res, next) => {
  try {
    const category = await categoryService.getById(req.params.id);
    res.render("category/detail", { category });
  } catch (error) {
    next(error);
  }
};

exports.renderEditForm = async (req, res, next) => {
  try {
    const category = await categoryService.getById(req.params.id);
    res.render("category/edit", { category });
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    await categoryService.update(req.params.id, req.body);
    res.redirect("/admin/category/list");
  } catch (error) {
    next(error);
  }
};
