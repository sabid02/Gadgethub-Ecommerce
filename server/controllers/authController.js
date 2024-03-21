const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working");
};

//Sign up
const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    // Check if name is entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    //Check is password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 character",
      });
    }
    // Check email
    const exist = await User.findOne({ email });

    if (exist) {
      res.json({
        error: "Email is already used",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

//Sign in
const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      res.json("password match");
    }
    if (!match) {
      res.json({ error: "password do not match" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  signInUser,
};
