const jwt = require("jsonwebtoken");

const secretString = proecess.env.TOKEN_SECRET_AUTH

module.exports = function (creater, isAdmin)
{
  const token = jwt.sign(
    {
      userId: creater.id,
      email: (creater.INFO)?creater.INFO.registeredEmail:creater.email,
      isAdmin: isAdmin,
    },
    secretString,
    { expiresIn: "1h" }
  );
  return token;
}
