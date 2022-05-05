const Client = require("../models/Client.model");

module.exports.clientController = {

  getAllClients: async (req, res) => {
    const users = await Client.find();
    res.json(users);
  },

  getClientById: async (req, res) => {
    const user = await Client.findById(req.params.id);
    await res.json(user);
  },

  createClient: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber,
        email,
        gender,
        birthday
      } = req.body;
      const client = await Client.create({
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber,
        email,
        gender,
        birthday
      });
      await res.json(client);
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при создании клиента " + e.toString(),
      });
    }
  },

  deleteClient: async (req, res) => {
    try {
      const { id } = req.params;
      const client = await Client.findByIdAndDelete(id);
      res.json(client);
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при удалении клиента " + e.toString(),
      });
    }
  },

  patchClient: async (req, res) => {
    try {
      const { id } = req.params;

      const {
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber,
        email,
        gender,
        birthday
      } = req.body;

      const client = await Client.findByIdAndUpdate(
        id,
        {
          firstName,
          lastName,
          fathersName,
          phoneNumber,
          secondPhoneNumber,
          email,
          gender,
          birthday
        },
        { new: true }
      );
      res.json(client)
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при изменении клиента " + e.toString(),
      });
    }
  },

};
