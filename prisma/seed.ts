import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.ingredient.createMany({
        data: [
            { title: 'egg' },
            { title: 'milk' },
            { title: 'ketchup' },
            { title: 'flour' },
            { title: 'sugar' },
            { title: 'peanut butter' },
            { title: 'jam' },
            { title: 'bread' },
        ]
    })

    await prisma.recipe.create({
            data: {
                title: 'omelette',
                instructions: 'make an omelette and drizzle ketchup',
                ingredients: {
                    create: [
                        {
                            quantity: 4,
                            ingredient: { connect: { title: 'egg' } }
                        },
                        {
                            ingredient: { connect: { title: 'ketchup' } }
                        },
                    ]
                }
            }
        }
    )
    await prisma.recipe.create({
            data: {
                title: 'pancakes',
                instructions: 'mix wet ingredients and fry',
                ingredients: {
                    create: [
                        {
                            quantity: 4,
                            ingredient: { connect: { title: 'egg' } }
                        },
                        {
                            ingredient: { connect: { title: 'flour' } }
                        },
                        {
                            ingredient: { connect: { title: 'sugar' } }
                        },
                        {
                            ingredient: { connect: { title: 'milk' } }
                        },
                    ]
                }
            }
        }
    )
    await prisma.recipe.create({
            data: {
                title: 'PBJ sandwich',
                instructions: 'assemble the sandwich',
                ingredients: {
                    create: [
                        {
                            ingredient: { connect: { title: 'peanut butter' } }
                        },
                        {
                            ingredient: { connect: { title: 'jam' } }
                        },
                        {
                            quantity: 2,
                            ingredient: { connect: { title: 'bread' } }
                        },
                    ]
                }
            }
        }
    )

    //  end of main()
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
