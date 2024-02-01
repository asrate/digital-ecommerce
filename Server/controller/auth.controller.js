import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const test = (req, res) => {
  res.json({ message: "hello world" });
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
};
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return res.status(404).json("Invalid email or password");
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return res.status(404).json("invalid email or password");
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res.status(200).json(token);
  } catch (error) {
    console.error(error);
  }
};
