const prisma = require('../config/prisma');

class UserRepository {
    async create(data) {
        return prisma.user.create({ data });
    }

    async findByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    }

    async findByPhone(phone) {
        return prisma.user.findUnique({ where: { phone }});
    }
}

module.exports = new UserRepository();