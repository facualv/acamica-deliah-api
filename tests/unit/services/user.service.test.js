const { UserService } = require("../../../src/services");
const { UserRepositoryMock } = require("../../mocks/user");
let {
  UserModelMock: { user, users }
} = require("../../mocks/user");

describe("User Service Tests", () => {
  //Logicas previas a la ejecucion de los tests (son una buena practica)
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a User by Id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.get.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.get(user._id);
    expect(expected).toMatchObject(user);
  });

  it("Should find a User by Username", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getUserByUserName.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getUserByUserName(user.username);
    //Acersion
    expect(expected).toMatchObject(user);
  });

  it("Should return a User collection", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getAll.mockReturnValue(users);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getAll();
    //Acersion
    expect(expected).toMatchObject(users);
  });

  it("Should update an specific user by Id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.update.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.update(user._id, user);
    //Acersion
    expect(expected).toMatchObject(user);
  });

  it("Should delete an specific user by Id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.delete.mockReturnValue(true);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.delete(user._id);
    //Acersion
    expect(expected).toEqual(true);
  });
});
