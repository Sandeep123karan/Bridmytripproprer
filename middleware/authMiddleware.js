// const jwt = require("jsonwebtoken");

// const protect = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
//     if (!token) return res.status(401).json({ message: "No token, unauthorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // { id: userId }
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Token invalid or expired" });
//   }
// };

// module.exports = protect;
// Already present:
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token, unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // contains user ID
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};

// ✅ New: Only Admin
const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

// ✅ New: Only Vendor
const isVendor = (req, res, next) => {
  if (req.user?.role !== "vendor") {
    return res.status(403).json({ message: "Access denied. Vendors only." });
  }
  next();
};

module.exports = { protect, isAdmin, isVendor };
