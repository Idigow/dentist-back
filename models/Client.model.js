const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    fathersName: {
      type: String
    },
    phoneNumber: {
      type: String,
    },
    secondPhoneNumber: {
      type: String
    },
    birthday: {
      type: String
    },
    email: {
      type: String
    },
    gender: {
      type: String
    },
  },
  { timestamps: true }
);

const Client = model("Client", clientSchema);
module.exports = Client;
