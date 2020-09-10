const express = require("express");
const { signup, signin, requireSignin } = require("../../controllers/admin/auth");
const { json } = require("body-parser");
const {  isRequestValidated, validateSignupRequest, validateSigninRequest } = require("../../validatios/auth");
const router = express.Router();

router.post("/admin/signup", validateSignupRequest , isRequestValidated,signup);

router.post("/admin/signin", validateSigninRequest , isRequestValidated, signin);


// router.post("/profile", requireSignin,(req,res)=>{
//     res.status(200).json({
//         user: 'profile'
//     });
// });
module.exports = router;
