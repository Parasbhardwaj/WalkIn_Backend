const JWT = require("jsonwebtoken");
const { accessSecretKey, refreshSecretKey } = require("../../config");

const jwtAuth = {};

jwtAuth.createAccessToken = async (user) => {
  try {
    const payload = {
      email: user.email,
      iss: "parasbhardwaj",
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

module.exports = jwtAuth;
