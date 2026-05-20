const express = require('express');
const verifyToken = require("../Middleware/userMiddleware");

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    res.status(200).json({message: "This is a protected route", userId: req.userId});
});

module.exports = router;