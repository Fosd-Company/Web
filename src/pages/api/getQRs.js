import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
    const prisma = new PrismaClient();
    const qrs = await prisma.magazine.findMany({
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
    res.json(qrs);
    
}