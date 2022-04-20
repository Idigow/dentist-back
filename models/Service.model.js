const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema(
  {
    service: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Service = model("Service", ServiceSchema);
module.exports = Service;
