const express = require("express");
const passport = require("passport");
require("dotenv").config();
require("./passport");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server Working");
});

// 🔵 GOOGLE LOGIN ROUTE
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🔵 GOOGLE CALLBACK
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL); // e.g. http://localhost:5173
  }
);

// USER DATA ROUTE
app.get("/auth/user", (req, res) => {
  res.send(req.user);
  console.log(req.user)
});

// LOGOUT
app.get("/auth/logout", (req, res) => {
  req.logout(() => {});
  res.redirect(process.env.CLIENT_URL);
});
mongoose
  .connect("mongodb://127.0.0.1:27017/googleAuth")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(8000, () => console.log("Server running on 8000"));
