const bcrypt = require("bcrypt");

encryptPasssword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
}

checkPassword = async (inputPassword,savedPassword) =>{
  try {
    const isPasswordCorrect = await bcrypt.compare(inputPassword, savedPassword)
    return isPasswordCorrect;
  } catch (error) {
    throw error;
  }
}

module.exports = {encryptPasssword,checkPassword}
