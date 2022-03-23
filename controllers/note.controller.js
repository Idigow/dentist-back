const Note = require("../models/Note.model");

module.exports.noteController = {
  getNoteByDate: async (req, res) => {
    const { date } = req.body;

    const note = await Note.find({date});

    await res.json(note);
  },
  createNote: async (req, res) => {
    const { entry, doctor, client, date, price, teeth, diagnosis } = req.body;

    const note = await Note.create({
      entry,
      doctor,
      client,
      date,
      price,
      teeth,
      diagnosis,
    });

    await res.json(note);
  },
};
