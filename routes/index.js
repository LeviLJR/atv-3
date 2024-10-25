var express = require("express");
var router = express.Router();

// GET home page
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Welcome",
    links: [
      { href: "/route1", text: "Ir para Rota 1" },
      { href: "/route2", text: "Ir para Rota 2" },
      { href: "/form", text: "Formulário de Validação" },
    ],
  });
});

module.exports = router;
