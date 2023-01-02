import {NextApiRequest, NextApiResponse} from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const recipes = await prisma.recipe.findMany()


    res.status(200).json(recipes)
}
