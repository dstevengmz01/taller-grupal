const { Usuario } = require("../models");

class UsuarioService {
  async getAllUsuarios() {
    return await Usuario.findAll();
  }

  async getUsuarioById(id) {
    return await Usuario.findByPk(id);
  }

  async createUsuario(data) {
    return await Usuario.create(data);
  }

  async deleteUsuario(id) {
    return await Usuario.destroy({ where: { id } });
  }
}

module.exports = new UsuarioService();
