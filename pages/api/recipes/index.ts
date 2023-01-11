import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ingredientsString = req.query.ingredients as string
    let ingredientsTitles: string[] = []
    try {
        ingredientsTitles = ingredientsString.split(',')
    } catch (e) {

    }

    let recipes;
    // if has query params
    if (ingredientsTitles.length !== 0) {
        recipes = await prisma.recipe.findMany({
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
            },
        });
    } else {
        recipes = await prisma.recipe.findMany()
    }
    res.status(200).json(recipes)
}
