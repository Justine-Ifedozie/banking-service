const prisma = require('../src/config/database');

beforeEach(async () => {
    await prisma.user.deleteMany();
});

afterAll(async () => {
    await prisma.$disconnect();
});