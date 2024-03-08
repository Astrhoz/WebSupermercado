// Librería para Backend de JavaScript
const express = require("express");
const app = express();

const morgan = require("morgan");

const cors = require("cors"); // Permite la solicitud de recursos desde externos al servidor

const taskRoutes = require("./routes/compras.routes");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);

app.listen(5000, () =>
  console.log("El servidor se ha iniciado en el puerto 5000")
);
