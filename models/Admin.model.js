const { Schema, model } = require("mongoose");

const AdminSchema = new Schema(
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
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
        },
        secondPhoneNumber: {
            type: String
        },
        login: {
            type: String,
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

const Admin = model("Admin", AdminSchema);
module.exports = Admin;
