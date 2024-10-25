var express = require("express");
var router = express.Router();

// Rota 1
router.get("/route1", (req, res) => {
  res.render("index", {
    title: "Rota 1",
    links: [
      { href: "/", text: "Ir para Home" },
      { href: "/route2", text: "Ir para Rota 2" },
    ],
  });
});

// Rota 2
router.get("/route2", (req, res) => {
  res.render("index", {
    title: "Rota 2",
    links: [
      { href: "/", text: "Ir para Home" },
      { href: "/route1", text: "Ir para Rota 1" },
    ],
  });
});

// Inverter texto
router.get("/invert", (req, res) => {
  const texto = req.query.text || "";
  const textoInvertido = texto.split("").reverse().join("");
  res.render("invert", {
    title: "Texto Invertido",
    textoInvertido,
    links: [
      { href: "/", text: "Ir para Home" },
      { href: "/route1", text: "Ir para Rota 1" },
      { href: "/route2", text: "Ir para Rota 2" },
    ],
  });
});

// Formulário de validação
router.get("/form", (req, res) => {
  res.render("form", { title: "Formulário de Validação" });
});

// Validação de usuário
router.post("/validate", (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;

  const mensagem =
    senha === usuario + usuario
      ? "Usuário possui permissão de acesso."
      : "Usuário não possui permissão de acesso.";

  res.render("validate", {
    title: "Validação de Usuário",
    mensagem,
    links: [{ href: "/", text: "Ir para Home" }],
  });
});

module.exports = router;
