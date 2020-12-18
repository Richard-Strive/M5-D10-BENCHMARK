const express = require("express");
// const multer = require("multer");
/*Prima di utilizzarlo(multer) rivedere su Youtube o sulle registrazioni di Riccardo*/
const unqid = require("uniqid");
const { writeReviews, getReviews } = require("../tools/fsUti");
const { check, validationResult } = require("express-validator");
const router = express.Router();

/*
 {
        "_id": "123455", //SERVER GENERATED
        "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
        "rate": 3, //REQUIRED, max 5
        "elementId": "5d318e1a8541744830bef139", //REQUIRED = IMDBID
        "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
    }
*/
router.get("/", async (req, res, next) => {
  try {
    const AllReviews = await getReviews();
    res.status(200).send(AllReviews);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const AllReviews = await getReviews();
    const singleReview = AllReviews.filter(
      (review) => review._id === req.params.id
    );
    res.status(200).send(singleReview);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const AllReviews = await getReviews();
    const newReview = { _id: unqid(), ...req.body };
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
