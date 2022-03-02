const jwt = require("jsonwebtoken");

module.exports = function (creater, isAdmin)
{
  const token = jwt.sign(
    {
      userId: creater.id,
      email: (creater.INFO)?creater.INFO.registeredEmail:creater.email,
      isAdmin: isAdmin,
    },
    "toBeKeptSecret",
    { expiresIn: "1h" }
  );
  return token;
}
