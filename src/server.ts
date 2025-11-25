

import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando com Nodemon + TS + ESM! 🚀" });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
