const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/user.repository');
const AppError = require('../middleware/appError');
const { signToken } = require('../utils/jwt');

class AuthService {
    async register(payload) {
        if (await userRepository.findByEmail(payload.email)){
            throw new AppError('Email already exists', 409);
        }

        if (await userRepository.findByPhone(payload.phone)) {
            throw new AppError('Phone already exists', 409);
        }

        const passwordHash = await bcrypt.hash(payload.password, 12);

        return userRepository.create({
            email: payload.email,
            phone: payload.phone,
            passwordHash,
            firstName: payload.firstName,
            lastName: payload.lastName
        });
    }

    async login({ email, password }) {
        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Invalid email or password', 401);
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordValid) {
            throw new AppError('Invalid email or password', 401);
        }

        const token = signToken({ userId: user.id });

        return { user, token };
    }
}

module.exports = new AuthService();