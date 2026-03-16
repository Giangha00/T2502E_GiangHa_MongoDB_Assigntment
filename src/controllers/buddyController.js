const buddyService = require("../services/buddyService");

exports.getBuddies = async (req, res, next) => {
  try {
    const buddies = await buddyService.get();
    res.render("buddy/list", { buddies });
  } catch (error) {
    next(error);
  }
};

exports.renderCreateForm = async (req, res, next) => {
  try {
    const categoryService = require("../services/categoryService");
    const categories = await categoryService.get();
    res.render("buddy/create", { categories });
  } catch (error) {
    next(error);
  }
};

exports.createBuddy = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    if (req.file && req.file.filename) {
      payload.image = req.file.filename;
    }
    await buddyService.create(payload);
    res.redirect("/admin/buddy/list");
  } catch (error) {
    next(error);
  }
};

exports.renderEditForm = async (req, res, next) => {
  try {
    const categoryService = require("../services/categoryService");
    const [buddy, categories] = await Promise.all([
      buddyService.getById(req.params.id),
      categoryService.get(),
    ]);
    res.render("buddy/edit", { buddy, categories });
  } catch (error) {
    next(error);
  }
};

exports.updateBuddy = async (req, res, next) => {
  try {
    const payload = { ...req.body };
    if (req.file && req.file.filename) {
      payload.image = req.file.filename;
    }
    await buddyService.update(req.params.id, payload);
    res.redirect("/admin/buddy/list");
  } catch (error) {
    next(error);
  }
};

exports.deleteBuddy = async (req, res, next) => {
  try {
    await buddyService.delete(req.params.id);
    res.redirect("/admin/buddy/list");
  } catch (error) {
    next(error);
  }
};

exports.renderDetail = async (req, res, next) => {
  try {
    const buddy = await buddyService.getById(req.params.id);
    res.render("buddy/detail", { buddy });
  } catch (error) {
    next(error);
  }
};
