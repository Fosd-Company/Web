const seeds = require('./qr');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// add seed
const addSeed = async (seed) => {
    await prisma.magazineModels.createMany({
        data: seed,
    });
}
addSeed(seeds)