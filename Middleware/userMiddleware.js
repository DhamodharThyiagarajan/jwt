const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token= req.headers["authorization"];
    if (!token) {
        return res.status(401).json({message: "Authorization header missing"});
    }   
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid token", error});
    }   
};

module.exports = authMiddleware;
