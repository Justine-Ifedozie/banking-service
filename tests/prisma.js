if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
