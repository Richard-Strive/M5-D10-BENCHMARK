const express = require("express");
// const multer = require("multer");
/*Prima di utilizzarlo(multer) rivedere su Youtube o sulle registrazioni di Riccardo*/
const unqid = require("uniqid");
const { writeMedia, getMedia } = require("../tools/fsUti");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allMedia = await getMedia();
    res.status(200).send(allMedia);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const allMedia = await getMedia();
    const singleMedia = allMedia.find(
      (movie) => movie.imdbID === req.params.id
    );
    res.status(200).send(singleMedia);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    allMedia = await getMedia();
    newMedia = {
      ...req.body,
      imdbID: unqid(),
    };
    allMedia.push(newMedia);
    await writeMedia(allMedia);
    res.status(201).send(newMedia);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    allMedia = await getMedia();
    newAllMedia = allMedia.filter((media) => media.imdbID !== req.params.id);
    await writeMedia(newAllMedia);
    res.status(200).send(newAllMedia);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/*
------------------------------------------------------------------------------
POST IMAGE 
 */

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { folder: "striveMovies" },
});
/* sintassi per salvare file nella cloud solo per imagini () */

const cloudinaryMulter = multer({ storage: storage });
/* Libreria che salva i file multer */

router.post(
  "/:id/upload",
  cloudinaryMulter.single("image"),
  async (req, res, next) => {
    try {
      const AllMedia = await getMedia();
      const mediaIndex = AllMedia.findIndex(
        (media) => media.imdbID === req.params.id
      );
      if (mediaIndex !== -1) {
        const updatedMedia = [
          ...AllMedia.slice(0, mediaIndex),
          { ...allMedia[mediaIndex], POSTER: req.file.path },
          ...AllMedia.slice(mediaIndex + 1),
        ];
        allMedia.push(updatedMedia);
        writeMedia(allMedia);
        res.status(200).send(updatedMedia[mediaIndex]);
      } else {
        const error = new Error();
        error.httpStatusCode = 404;
        next(error);
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
