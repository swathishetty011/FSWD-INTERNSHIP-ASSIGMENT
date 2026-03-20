const express = require("express");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/products", productRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});