const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){
       return next();
    }

  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer jwt"
    if (token) {
      const decodedToken = jwt.verify(token, "toBeKeptSecret");
      console.log(decodedToken)
      req.userData = { userId: decodedToken.userId };
      next();
    }
  } catch (e) {
    throw Error(e.message);
  }
};
