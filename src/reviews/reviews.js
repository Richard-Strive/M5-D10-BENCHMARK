const express = require("express");
// const multer = require("multer");
/*Prima di utilizzarlo(multer) rivedere su Youtube o sulle registrazioni di Riccardo*/
const unqid = require("uniqid");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
