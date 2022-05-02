const seeds = require('./seddDB');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// add seed
// const addSeed = async (seed) => {
//     await prisma.magazine.upsert({
//         data: seeds.magazine,
//     });
//     await prisma.category.upsert({
//         data: seeds.category,
//     })
//     await prisma.magazineCategory.upsert({
//         data: seeds.magazineCategory,
//     })
// }
addSeed(seeds)