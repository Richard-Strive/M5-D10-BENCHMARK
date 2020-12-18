const { writeJSON, readJSON } = require("fs-extra");
const { join } = require("path");

const filePath = join("./src/media/mediaDB.json");

const readDB = async (filePath) => {
  try {
    const fileJSON = await readJSON(filePath);
    return fileJSON;
  } catch (error) {
    console.log(error);
  }
};

const writeDB = async (filePath, data) => {
  try {
    await writeJSON(filePath, data);
  } catch (error) {
    console.log(error);
  }
};
const reviewsPath = join("./src/reviews/reviews.json");

const readReviewsDB = async (filePath) => {
  try {
    const fileJSON = await readJSON(filePath);
    return fileJSON;
  } catch (error) {
    console.log(error);
  }
};

const writeReviewsDB = async (filePath, data) => {
  try {
    await writeJSON(filePath, data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMedia: async () => readDB(filePath),
  writeMedia: async (mediaData) => writeDB(filePath, mediaData),
  writeReviewsDB: async (reviewsData) =>
    writeReviewsDB(reviewsPath, reviewsData),
  getReviews: async () => readReviewsDB(reviewsPath),
};
