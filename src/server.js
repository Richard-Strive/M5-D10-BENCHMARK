const express = require("express");
const reviewsRouter = require("./reviews/reviews");
const mediaRouter = require("./media/media");
const listEndopoints = require("express-list-endpoints");
// const cors = require("cors");
const {
  notFoundErrorHandler,
  unauthorizedErrorHandler,
  forbiddenErrorHandler,
  badRequestErrorHandler,
  catchAllErrorHandler,
} = require("./tools/errorHandlers");

const port = process.env.PORT || 3001;
const server = express();
// server.use(cors());
server.use(express.json());

server.use("/media", mediaRouter);
server.use("/reviews", reviewsRouter);

server.use(notFoundErrorHandler);
server.use(unauthorizedErrorHandler);
server.use(forbiddenErrorHandler);
server.use(badRequestErrorHandler);
server.use(catchAllErrorHandler);

server.listen(port, () => {
  console.log("This is the port---->", port);
});

console.log(listEndopoints(server));
