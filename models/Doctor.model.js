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
    },
    phoneNumber: {
      type: String,
      // required: true,
    },
    secondPhoneNumber: {
      type: String,
    },
    birthday: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    salary: {
      type: String,
    },
    speciality: {
      type: Array,
      // required: true,
    },
    percent: {
      type: String,
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
      //required: true
    },
    color:{
      type: String,
    }
  },
  { timestamps: true }
);

const Doctor = model("Doctor", doctorSchema);
module.exports = Doctor;
