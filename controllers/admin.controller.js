const Admin = require("../models/Admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor.model");

module.exports.adminController = {
    getAdminList: async (req,res) => {
        const admin = await Admin.find();
        res.json(admin);
    },

    getAdminForDirector: async (req, res) => {
        const { id } = req.params
        const admin = await Admin.findById(id);
        res.json(admin);
    },

    getAdminById: async (req, res) => {
        const admin = await Admin.findById(req.user.id, { password: 0 });
        await res.json(admin);
    },

    register: async (req, res) => {
        try {

            const {
                firstName,
                lastName,
                fathersName,
                email,
                phoneNumber,
                secondPhoneNumber,
                login,
                password,
                role
            } = req.body

            const hash = await bcrypt.hash(
                password.toString(),
                Number(process.env.BCRYPT_ROUNDS)
            );

            const admin = await Admin.create({
                firstName,
                lastName,
                fathersName,
                email,
                phoneNumber,
                secondPhoneNumber,
                login,
                password: hash,
                role
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
            await res.json(admin);
        } catch (e) {
            return res.status(400).json({
                error: "Ошибка при регистрации" + e.toString(),
            });
        }
    },

    login: async (req, res) => {
        const { login, password } = req.body;
        const candidate = await Admin.findOne({ login });
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

    deleteAdmin: async (req, res) => {
        try {
            const { id } = req.params;
            await Admin.findByIdAndDelete(id);
            res.status(200).json({
                message: "Удаление прошло успешно",
                success: true
            });
        } catch (e) {
            return res.status(400).json({
                error: "Ошибка при удалении Админа " + e.toString(),
            });
        }
    },

    editAdmin: async (req,res) => {
        try {
            const { id } = req.params;
            const body = req.body
            const admin = await Admin.findByIdAndUpdate(
                id,
                {
                    ...body
                },
                { new: true }
            )
            res.json(admin)
        } catch (e) {
            return res.status(400).json({
                error: "Ошибка при изменении Админа " + e.toString(),
            });
        }
    }
}