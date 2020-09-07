const express = require("express");
const { signup, signin, requireSignin } = require("../../controllers/admin/auth");
const { json } = require("body-parser");
const router = express.Router();

router.post("/admin/signup", signup);

router.post("/admin/signin", signin);

// router.post("/profile", requireSignin,(req,res)=>{
//     res.status(200).json({
//         user: 'profile'
//     });
// });
module.exports = router;
