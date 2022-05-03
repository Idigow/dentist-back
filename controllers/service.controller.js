const Service = require("../models/Service.model");

module.exports.serviceController = {

  getService: async (req, res) => {
    const services = await Service.find();

    await res.json(services);
  },

  getServiceById: async (req, res) => {
    const { id } = req.params

    const services = await Service.findById(id);

    await res.json(services);
  },

  createService: async (req, res) => {
    const { service, price } = req.body;

    const services = await Service.create({
      service,
      price,
    });
    await res.json(services);
  },

  removeServices: async (req, res) => {
    const { id } = req.params;

    await Service.findByIdAndDelete(id);

    const services = await Service.find();

    await res.json(services);
  },

  editServices: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const services = await Service.findByIdAndUpdate(
      id,
      {
        ...body
      },
      { new: true }
    );
    await res.json(services);
  },
};
