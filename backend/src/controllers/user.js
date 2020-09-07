const User = require("../models/user");

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
