import express from "express";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import router from "./router.js";

// Конфиг
const DB_URL =
  "mongodb+srv://user:ZTEUfwbAMefEMgsO@cluster0.egkux.mongodb.net/?retryWrites=true&w=majority";

const PORT = 5000;

// Создание backend приложения
const app = express();

// Регистрация модулей (middlewares)
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));

// Регистрация роутеров
app.use("/api", router);
// app.use("/users", userRouter);

// Старт приложения
async function startApp() {
  try {
    // Подключение БД
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    // Активация слушателя
    app.listen(PORT, () => {
      console.log("Server Started on PORT: " + PORT); // TODO: DELETE
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
