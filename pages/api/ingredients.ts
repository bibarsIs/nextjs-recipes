import {NextApiRequest, NextApiResponse} from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const ingredients = await prisma.ingredient.findMany()


    res.status(200).json(ingredients)
}
