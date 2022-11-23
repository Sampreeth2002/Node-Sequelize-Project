// Importing controllers for reviews and products
const ProductController = require("../conntollers/productController");
const reviewController = require("../conntollers/reviewController");

const router = require("express").Router();

router.post("/addProduct", ProductController.addProduct);

router.get("/allProducts", ProductController.getAllProducts);

router.get("/published", ProductController.getPublishedProduct);

// Review Url and Controller

router.post("/addReview", reviewController.addReview);

router.get("/allReviews", reviewController.getAllReviews);

router.get("/:id", ProductController.getOneProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
