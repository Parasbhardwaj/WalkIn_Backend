const JWT = require("jsonwebtoken");
const { accessSecretKey, refreshSecretKey } = require("../../config");
const createError = require("http-errors");

const jwtAuth = {};

jwtAuth.generateAccessToken = async (user) => {
  try {
    const payload = {
      email: user.email,
    };
    const options = {
      allowInsecureKeySizes: true,
      expiresIn: 300,
      issuer: "parasbhardwaj",
      audience: user.email,
    };
    const token = JWT.sign(payload, accessSecretKey, options);
    return token;
  } catch (err) {
    throw err;
  }
};

jwtAuth.generateRefreshToken = async (user) => {
  try {
    const payload = {
      email: user.email,
    };
    const options = {
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hrs
      issuer: "parasbhardwaj",
      audience: user.email,
    };
    const token = JWT.sign(payload, refreshSecretKey, options);
    return token;
  } catch (err) {
    throw err;
  }
};

jwtAuth.validateAccessToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      throw createError.Unauthorized("Request is not authorized.");

    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    JWT.verify(token, accessSecretKey, (err, payload) => {
      if (err) {
        const errorMessage =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        throw createError.Unauthorized(errorMessage);
      }
      req.payload = payload;
      next();
    });
  } catch (error) {
    return next(error);
  }
};

jwtAuth.validateRefreshToken = (refreshToken) => {
  return new Promise((resolve,reject)=>{
      JWT.verify(refreshToken, refreshSecretKey, (err, payload) => {
        console.log(err);
        console.log(payload);
        if (err) return reject(createError.Unauthorized())
        const userEmail = payload.email
        console.log("userEmail",userEmail);
        resolve(userEmail)
      });
  })
};

module.exports = jwtAuth;
