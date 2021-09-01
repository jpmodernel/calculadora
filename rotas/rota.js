const express = require("express");
const router = express.Router();
var controle = require("../controle/controle");

router.get("/add", controle.abreAdd);
router.post("/add", controle.add);

module.exports = router;