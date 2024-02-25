import { PrismaClient } from "@prisma/client";
import champions from "./champions.json" assert { type: "json" };

const prisma = new PrismaClient();

const main = async () => {
    for (const champion of champions) {
        await prisma.champion.create({
            data: champion,
        });
    }
    console.log("Champions insérés avec succès dans la base de données !");
};

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
