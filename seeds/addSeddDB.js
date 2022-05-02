const seeds = require('./seddDB');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// add seed
const addSeed = async (seed) => {
    await prisma.magazine.createMany({
        data: seeds.magazine,
    });
    await prisma.category.createMany({
        data: seeds.category,
    })
    await prisma.magazineCategory.createMany({
        data: seeds.magazineCategory,
    })
}
addSeed(seeds)