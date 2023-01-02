import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    const title = req.query.title as string
    console.log(title)

    const recipe = await prisma.recipe.findFirst({
        where: { title: title}
    })

    res.status(200).json(recipe)
}
