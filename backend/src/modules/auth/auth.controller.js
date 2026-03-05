import { registerUser, loginUser } from "./auth.service.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token } = await loginUser(req.body);
    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const googleAuth = async(req,res) =>{
  const user = req.user;

  const token = jwt.sign(
    {userId : user.id},
    process.env.JWT_SECRET,
    {expiresIn :process.env.JWT_EXPIRES_IN}
  )
  res.redirect(`https://financetracker-5kffn14k9-soumojit-007s-projects.vercel.app/dashboard?token=${token}`);
  // res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  //res.json({ message: "Google authentication successful", token, user });
}