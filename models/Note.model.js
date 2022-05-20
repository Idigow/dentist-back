const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
      recordType: {
      type: String,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    visitDate: {
      type: String,
    },
    visitTime: {
        type: String,
    },
    duration: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Note = model("Note", noteSchema);
module.exports = Note;
