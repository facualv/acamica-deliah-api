let _userService = null;
let _authService = null;

class UserController {
  constructor({ UserService, AuthService }) {
    _userService = UserService;
    _authService = AuthService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userService.get(userId);
    return res.send(user);
  }

  async getAll(req, res) {
    const users = await _userService.getAll();
    return res.send(users);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updatedUser = await _userService.update(userId, body);
    return res.send(updatedUser);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const deletedUser = await _userService.delete(userId);
    return res.send(deletedUser);
  }

  async signUp(req, res) {
    const { body } = req;
    const createdUser = await _authService.signUp(body);
    return res.status(201).send(createdUser);
  }

  async signIn(req, res) {
    const { body } = req;
    const creds = await _authService.signIn(body);
    return res.status(200).send(creds);
  }
}

module.exports = UserController;
