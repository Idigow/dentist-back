const Doctor = require("../models/Doctor.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.doctorController = {
  getAllDoctors: async (req, res) => {
    const doctor = await Doctor.find();
    res.json(doctor);
  },

  getDoctorForDirector: async (req, res) => {
    const { id } = req.params
    const doctor = await Doctor.findById(id);
    res.json(doctor);
  },

  getDoctorById: async (req, res) => {
    const doctor = await Doctor.findById(req.user.id, { password: 0 });
    await res.json(doctor);
  },

  register: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber,
        birthday,
        email,
        gender,
        salary,
        speciality,
        percent,
        color,
        login,
        password
      } = req.body;
      const hash = await bcrypt.hash(
        password.toString(),
        Number(process.env.BCRYPT_ROUNDS)
      );
      const doctor = await Doctor.create({
        firstName: firstName,
        lastName: lastName,
        fathersName: fathersName,
        phoneNumber: phoneNumber,
        secondPhoneNumber: secondPhoneNumber,
        birthday: birthday,
        email: email,
        gender: gender,
        salary: salary,
        color: color,
        speciality: speciality,
        percent: percent,
        login: login,
        password: hash,
      });
      if (!login) {
        return res.json({
          error: "login не найден",
        });
      }
      if (!password) {
        return res.json({
          error: "password не найден",
        });
      }
      await res.json(doctor);
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при регистрации" + e.toString(),
      });
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await Doctor.findOne({ login });
    if (!candidate) {
      return res.status(401).json({
        error: "Неверный логин или пароль!",
      });
    }

    const valid = await bcrypt.compare(password.toString(), candidate.password);
    if (!valid) {
      return res.status(401).json({
        error: "Неверный логин или пароль!",
      });
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });

    res.json({
      token: token,
      role: candidate.role,
    });
  },

  deleteDoctor: async (req, res) => {
    try {
      const { id } = req.params;
      await Doctor.findByIdAndDelete(id);
      res.status(200).json({
        message: "Удаление прошло успешно",
        success: true
      });
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при удалении Доктора " + e.toString(),
      });
    }
  },

  editDoctor: async (req,res) => {
    try {
      const { id } = req.params;
      const body = req.body
      const doctor = await Doctor.findByIdAndUpdate(
          id,
          {
          ...body
          },
          { new: true }
      )
      res.json(doctor)
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при изменении Доктора " + e.toString(),
      });
    }
  }
};
