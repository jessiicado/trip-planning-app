// const { auth } = require("express-openid-connect");

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: "a long, randomly-generated string stored in env",
//   baseURL: "http://localhost:5050",
//   clientID: "W8NIGd1s4k5BNeAUQ2vp6zNj4W56ievS",
//   issuerBaseURL: "https://plannd.us.auth0.com",
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
