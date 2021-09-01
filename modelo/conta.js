var conexao = require("./conexao");

var UsuarioScheme = conexao.Schema({
  resul1: { type: int },
  resul2: { type: int },
  resul3: { type: int },
  resul4: { type: int },
});

module.exports = conexao.model("Usuario", UsuarioScheme);