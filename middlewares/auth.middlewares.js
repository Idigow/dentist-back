const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("нет доступа (по authorization header)");
  }

  const [type, token] = await authorization.split(" ");

  if (type !== "Bearer") {
    return res.status(401).json("неверны тип токена");
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY);

    next();
  } catch (e) {
    return res.status(401).json("Ошибка ауторизации: " + e.toString());
  }
};
