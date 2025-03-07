const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const cors = require('cors');

const connectDB = require("./config/db");
connectDB();

const app = express();
const port = process.env.PORT || 8000;
//const HOST = process.env.HOST || '0.0.0.0'
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use('/api/pedidos', require('./routes/pedidosRoutes'));
app.use('/api/articulos', require('./routes/articulosRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
