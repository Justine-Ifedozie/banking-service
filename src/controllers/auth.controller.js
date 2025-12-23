const authService = require('../services/auth.service');
const { registerSchema, loginSchema } = require('../validators/auth.validator');
const AppError = require('../middleware/appError');

exports.register = async (req, res, next) => {
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new AppError(error.details[0].message, 400)
        }

        const user = await authService.register(value);

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            throw new AppError(error.details[0].message, 400)
        }

        const { user, token } = await authService.login(value);

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (err) {
        next(err);
    }
};