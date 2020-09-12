const express = require("express");
const router = express.Router();
const { requireSignin, userMiddleware } = require("../common_middleware");
const { addItemToCard } = require("../controllers/cart");

router.post("/user/cart/addtocart", requireSignin, userMiddleware, addItemToCard);

module.exports = router;
