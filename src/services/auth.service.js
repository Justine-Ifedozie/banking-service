const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/user.repository');
const AppError = require('../middleware/appError');

class AuthService {
    async register(payload) {
        if (await userRepository.findByEmail(payload.email)){
            throw new AppError('Email already exists', 400);
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
}

module.exports = new AuthService();