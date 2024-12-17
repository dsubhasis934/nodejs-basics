const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process?.env?.JWT_SECRET_KEY;

//register controller
const registerUser = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;

    //check if user is already exists
    const isExistingUser = await User.findOne({
      $or: [{ userName }, { email }],
    }); //check if userName or email is already exits
    if (isExistingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash the password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    const createNewUser = await User.create(newUser);

    if (createNewUser) {
      res.status(201).json({
        success: true,
        message: "New user successfully created",
        data: createNewUser,
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Unable to create new user" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering user",
    });
  }
};

//login controller

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const isUserExists = await User.findOne({ userName });
    if (isUserExists) {
      //compare the password
      const isValidPassword = await bcrypt.compare(
        password,
        isUserExists.password
      );
      if (isValidPassword) {
        //create token
        const accessToken = jwt.sign(
          {
            userId: isUserExists?._id,
            userName: isUserExists?.userName,
            role: isUserExists?.role,
          },
          secretKey,
          { expiresIn: "15m" }
        );

        if (accessToken) {
          res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
              accessToken: accessToken,
            },
          });
        }
      } else {
        return res.status(400).json({ message: "Password not match" });
      }
    } else {
      return res.status(400).json({ message: "User Not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering user",
    });
  }
};

module.exports = { registerUser, loginUser };
