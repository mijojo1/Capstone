const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered",
      });
    const { firstName, lastName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
    });
    _user.save((error, data) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          message: "Something wrong",
        });
      }
      if (data) {
        return res.status(400).json({
          message: "User created successfully",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        message: "Something wrong",
      });
    }
    if (user) {
      if (user.authenticate(req.body.password)) {
        //if the user pass is True create a token by is session, CREATIN THE TOKEN
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const {_id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName
          },
        });
      }
      else{
        return res.status(400).json({
          message: 'Invalid password'
        });
      }
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};
//verify tokens
exports.requireSignin = (req,res,next)=>{
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  //attach the user on the request
  req.user = user;
  next();
  //jwt.decode()
}