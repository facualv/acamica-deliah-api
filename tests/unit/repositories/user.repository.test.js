const { UserRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { User } = require("../../../src/models");

let {
  UserModelMock: { user, users }
} = require("../../mocks/user");

//Inicia la escritura de los tests con el metodo describe(). Creamos una suite de test (un grupo de tests)

describe("User Repository Test", () => {
  //Logicas previas a la ejecucion de los tests (son una buena practica)
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a User by Id", async () => {
    // hacemos una fotocopia del objeto user con el operador rest (...)
    // si destructuraramos de la forma normal se estaria pasando una referencia
    // al objeto y lo terminariamos sobrescribiendo
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.get(_user._id);
    //Acersion
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should return a User by Username", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getUserByUserName(_user.username);
    //Acersion
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should return a User collection", async () => {
    users = users.map((user) => {
      delete user.password;
      return user;
    });

    mockingoose(User).toReturn(users, "find");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getAll();
    //Acersion
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(users);
  });

  it("Should update an specific user by Id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOneAndUpdate");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.update(_user._id, { name: "JJ Simpson" });
    //Acersion
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should delete an specific user by Id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOneAndDelete");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.delete(_user._id);
    //Acersion
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
