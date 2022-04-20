const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fathersName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    secondPhoneNumber: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    speciality: {
      type: Object,
      required: true,
    },
    percent: {
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
    },
    color:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Doctor = model("Doctor", doctorSchema);
module.exports = Doctor;
