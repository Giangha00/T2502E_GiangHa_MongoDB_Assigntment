const buddyController = require("../controllers/buddyController");
const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const uploadDir = path.join(__dirname, "..", "public", "images");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`),
});
const fileFilter = (req, file, cb) => {
  if (/^(image)\/(png|jpe?g|gif|webp|bmp|svg\+xml)$/i.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage, fileFilter });

router.get("/admin/buddy/list", buddyController.getBuddies);
router.get("/admin/buddy/create", buddyController.renderCreateForm);
router.get("/admin/buddy/store", (req, res) =>
  res.redirect("/admin/buddy/create")
);
router.post(
  "/admin/buddy/store",
  upload.single("imageFile"),
  buddyController.createBuddy
);
router.get("/admin/buddy/detail/:id", buddyController.renderDetail);
router.get("/admin/buddy/edit/:id", buddyController.renderEditForm);
router.post(
  "/admin/buddy/update/:id",
  upload.single("imageFile"),
  buddyController.updateBuddy
);
router.post("/admin/buddy/delete/:id", buddyController.deleteBuddy);

module.exports = router;
