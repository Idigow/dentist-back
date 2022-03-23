const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Doctor = model("Doctor", doctorSchema);
module.exports = Doctor;
