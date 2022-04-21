const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema(
  {
    service: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = model("Service", ServiceSchema);
module.exports = Service;
