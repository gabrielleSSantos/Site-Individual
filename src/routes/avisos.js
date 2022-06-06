var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listar(req, res);
});

// SELECT DOS HORARIOS

router.get("/listarHorario/:horario", function (req, res) {
      avisoController.listarHorario(req, res);
  });
  
module.exports = router;