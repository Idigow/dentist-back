const Note = require("../models/Note.model");

module.exports.noteController = {
  createNote: async (req, res) => {
    try {
      const {
        recordType,
        doctor,
        visitDate,
        visitTime,
        duration,
        patient,
        status
      } = req.body;

      const note = await Note.create({
        recordType,
        doctor,
        patient,
        visitDate,
        visitTime,
        duration,
        status
      });

      await res.json(note);
    } catch (e) {
      res.json(e.toString())
    }
  },
  getNoteByDate: async (req, res) => {
    const { date } = req.body;

    const note = await Note.find({date});

    await res.json(note);
  },

  getNoteById: async (req, res) => {
    const { id } = req.params

    const note = await Note.findById(id);

    await res.json(note);
  },

  getNoteByDoctorId: async (req, res) => {
    const { id } = req.params

    const note = await Note.find({doctor: id});

    await res.json(note);
  },

  getNoteByPatientId: async (req, res) => {
    const { id } = req.params

    const note = await Note.find({patient: id});

    await res.json(note);
  },

  getNotes: async (req, res) => {
    const note = await Note.find();

    await res.json(note);
  },

  removeNote: async (req, res) => {
    const { id } = req.params;

    await Note.findByIdAndDelete(id);

    const note = await Note.find();

    await res.json(note);
  },

  editNote: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const note = await Note.findByIdAndUpdate(
        id,
        {
          ...body
        },
        { new: true }
    );
    await res.json(note);
  },

};
