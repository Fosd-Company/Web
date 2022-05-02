const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// add seed
const getMagazine = async () => {
    const magazines = await prisma.magazine.findMany({
        include: {
            magazineCategory: {
                include: {
                    category: {
                        select: {
                            name: true,
                        }
                    },
                    magazine: false
                }
            }
        }
    });

    fs.writeFileSync('./magazine.json', JSON.stringify(magazines))
}
getMagazine()