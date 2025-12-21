process.env.NODE_ENV = 'test';

const prisma = require('./prisma');

beforeEach(async () => {
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
