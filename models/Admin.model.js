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
        login: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Admin = model("Admin", AdminSchema);
module.exports = Admin;
