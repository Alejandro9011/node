// import mongoose from "mongoose";
// const url =
//   "mongodb+srv://alejandro902019:456@cluster1.eoszury.mongodb.net/Universal?retryWrites=true&w=majority&appName=Cluster1";
// mongoose.connect(url);

// const db = mongoose.connection;
// db.on("open", () => {
//   console.log("Conectado a Mongo DB");
// });
// db.on("error", () => {
//   console.log("Error al conectar a Mongo DB");
// });

// export default db;
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

// const url = `mongodb+srv://${user}:${ password }@${cluster }/${dbName}?retryWrites=true&w=majority`;
const url = process.env.MONGODB_URL;


mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("Conectado a MongoDB");
});
db.on("error", () => {
  console.log("Error al conectar a MongoDB");
});

export default db;
