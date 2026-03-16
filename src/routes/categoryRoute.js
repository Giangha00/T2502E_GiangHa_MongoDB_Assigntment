const categoryController = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get("/admin/category/list", categoryController.getCategories);
router.get("/admin/category/create", categoryController.renderCreateForm);
router.post("/admin/category/store", categoryController.createCategory);
router.get("/admin/category/detail/:id", categoryController.renderDetail);
router.get("/admin/category/edit/:id", categoryController.renderEditForm);
router.post("/admin/category/update/:id", categoryController.updateCategory);
router.post("/admin/category/delete/:id", categoryController.deleteCategory);

module.exports = router;
