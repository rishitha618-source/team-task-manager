const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Log the incoming data
    console.log("Register Request Data:", req.body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("User already exists:", existingUser);  // Log the existing user
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Log the hashed password (avoid logging actual passwords)
    console.log("Hashed Password:", hashedPassword);

    // Create new user
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role,
      },
    });

    console.log("User Created:", user);  // Log the created user

    res.status(201).json({
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.log("Registration Error:", error);  // Log the error details

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log the incoming login data
    console.log("Login Request Data:", req.body);

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log("Invalid credentials (user not found)");  // Log invalid login attempt
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Invalid credentials (password mismatch)");  // Log password mismatch
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("JWT Token generated:", token);  // Log generated token

    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    console.log("Login Error:", error);  // Log the error details

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  register,
  login,
};