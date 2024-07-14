const JWT = require("jsonwebtoken");
const {secretKey} = require("../../config");

const jwtAuth = {};

jwtAuth.createToken = async (user) => {
  try {
    console.log(secretKey);
    const token = JWT.sign({ email: user.email }, secretKey, {
      allowInsecureKeySizes: true,
      expiresIn: 300,
      issuer: "parasbhardwaj",
      audience: user.email
    });

    return token;
  } catch (err) {
    return err
  }
};

module.exports = jwtAuth