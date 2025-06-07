const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "📌 API REST en Vercel funcionando correctamente",
    rutas_disponibles: {
      GET: "https://api-todo-gold.vercel.app/api/todo",
      POST: "https://api-todo-gold.vercel.app/api/todo",
      PUT: "https://api-todo-gold.vercel.app/api/todo/:id",
      DELETE: "https://api-todo-gold.vercel.app/api/todo:id"
    },
    nota: "Swagger no está disponible porque Vercel usa funciones serverless"
  })
});

app.use("/api", require("./routes/indexRouter"));


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en el puerto  http://localhost:${PORT}`);
});