const adminAuth = (req , res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if(!isAdminAuthorized) {
    res.status(401).send("Unauthorized request")
  } else {
    next();
  }
};

const userAuth = (req , res, next) => {
  const token = "xyzase";
  const isAdminAuthorized = token === "xyz";
  if(!isAdminAuthorized) {
    res.status(401).send("User auth is getting checked");
  } else {
    next();
  }
};

module.exports = {
    adminAuth,
    userAuth,
}