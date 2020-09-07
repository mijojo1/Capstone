const express = require("express");
const { signup, signin, requireSignin } = require("../controllers/auth");
const { json } = require("body-parser");
const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/profile", requireSignin,(req,res)=>{
    res.status(200).json({
        user: 'profile'
    });
});
module.exports = router;
