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