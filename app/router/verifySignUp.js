const db = require("../../models");
const User = db.User;

checkDuplicateUserNameOrEmail = (req, res, next) => {
  // -> Check Username is already in use
  User.findOne({
    where: {
      username: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res
        .status(400)
        .json({ status: 400, message: "Email is already taken!" });
      return;
    }
    next();
  })
  .catch((error) => {
    throw error
  })
  ;
};

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;

module.exports = signUpVerify;
