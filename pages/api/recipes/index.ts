import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ingredientsString = req.query.ingredients as string
    const ingredientsTitles = ingredientsString.split(',')

    const recipes = await prisma.recipe.findMany({
        where: {
            ingredients: {
                every: {
                    ingredient: {
                        title: {
                            in: ingredientsTitles
                        }
                    }
                }
            }
        }
    })
    res.status(200).json(recipes)
}
