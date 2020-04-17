const { generateToken } = require("../helpers");

let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username } = user;
    const userexist = await _userService.getUserByUserName(username);

    if (userexist) {
      const error = new Error();
      error.message = "User already exist";
      error.status = 401;
      throw error;
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;

    const userexist = await _userService.getUserByUserName(username);

    if (!userexist) {
      const error = new Error();
      error.message = "User does not exist";
      error.status = 404;
      throw error;
    }

    const validPassword = userexist.comparePasswords(password);

    if (!validPassword) {
      const error = new Error();
      error.message = "Invalid Password";
      error.status = 404;
      throw error;
    }

    const userToEncode = {
      username: userexist.username,
      id: userexist._id,
      isAdmin: userexist.isAdmin
    };

    const token = generateToken(userToEncode);

    return { token, user: userexist };
  }
}

module.exports = AuthService;
