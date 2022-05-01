import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
    const prisma = new PrismaClient();
    const qrs = await prisma.magazineModels.findMany({});
    res.json(qrs);
    
}