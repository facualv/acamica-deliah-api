const container = require("./src/startup/container");
const mongoose = require("mongoose");

const server = container.resolve("server");
const { MONGO_URI } = container.resolve("config");

// Para poder hacer relaciones
mongoose.set("useCreateIndex", true);

//User MongoAtlas: admin
//Password: admin123

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => server.start())
  .catch(console.log);
