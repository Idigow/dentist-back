const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    entry: {
      type: String,
    },
    doctor: {
      // type: Schema.Types.ObjectId,
      // ref: "Doctor",
      type: String,
      required: true,
    },
    client: {
      // type: Schema.Types.ObjectId,
      // ref: "Client",
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    price: {
      type: String,
    },
    teeth: {
      type: String,
    },
    diagnosis: {
      type: String,
    },
  },
  { timestamps: true }
);

const Note = model("Node", noteSchema);
module.exports = Note;
