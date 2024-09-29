// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  return next();
  // console.log(req.session);
  // if (req.session.user) {
  // }
  // res.status(401).json({ message: "Unauthorized" });
};

export default isAuthenticated;
