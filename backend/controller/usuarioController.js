const usuarioService = require("../services/usuarioService");

class UsuarioController {
  async getUsuarios(req, res) {
    const usuarios = await usuarioService.getAllUsuarios();
    res.json(usuarios);
  }

  async getUsuarioById(req, res) {
    const usuario = await usuarioService.getUsuarioById(req.params.id);
    usuario ? res.json(usuario) : res.status(404).json({ error: "Usuario no encontrado" });
  }

  async createUsuario(req, res) {
    const nuevoUsuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(nuevoUsuario);
  }

  async deleteUsuario(req, res) {
    await usuarioService.deleteUsuario(req.params.id);
    res.json({ message: "Usuario eliminado" });
  }
}

module.exports = new UsuarioController();
