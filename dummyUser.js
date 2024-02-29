const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createDummyUser() {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: '1',
        username: 'Developer Rahul',
        email: 'dboy1091997@gmail.com',
        // Add other fields as needed
      },
    });
    console.log('Dummy user created:', newUser);
  } catch (error) {
    console.error('Error creating dummy user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createDummyUser();
