const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const { uploadSingle } = require("../middleware/multer-middleware");
// const isAdminMiddleware = require('../middleware/admin-middleware')

const router = express.Router();

// router.get('/welcome',authMiddleware,isAdminMiddleware,(req,res)=>{   //we also add multiple middlewares here like adminMiddleware

router.get("/welcome", authMiddleware, (req, res) => {
  const { userName, role } = req?.userInfo;
  return res.json({ message: `welcome ${userName}` });
});

router.post("/upload", uploadSingle, (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send({
    message: "Single file uploaded successfully!",
    file: req.file,
  });
});

module.exports = router;
