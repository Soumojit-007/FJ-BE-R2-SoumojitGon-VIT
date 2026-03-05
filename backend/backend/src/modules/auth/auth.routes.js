import express from "express";
import { register, login , googleAuth} from "./auth.controller.js";
import passport from "../../config/passport.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

/* Google callback */
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuth
);
export default router;