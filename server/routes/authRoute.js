const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  signInUser,
  getProfile,
} = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/sign-up", registerUser);
router.post("/sign-in", signInUser);
router.get("/profile", getProfile);
// router.get("/products", getAllProducts);

module.exports = router;
