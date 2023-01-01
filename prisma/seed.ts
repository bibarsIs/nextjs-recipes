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
        ]
    })

    await prisma.recipe.create({
        data: {
            title: 'pancakes',
            instructions: 'mix ingredients and fry the batter',
            ingredients: {
                connect: [
                    { title: 'egg' },
                    { title: 'milk' },
                    { title: 'flour' },
                    { title: 'sugar' },
                    { title: 'peanut butter' },
                    { title: 'jam' },
                    { title: 'bread' },
                ]
            }
        }
    })
    await prisma.recipe.create({
        data: {
            title: 'omelette',
            instructions: 'make an omelette and drizzle ketchup',
            ingredients: {
                connect: [
                    { title: 'egg' },
                    { title: 'ketchup' },
                ]
            }
        }
    })
    await prisma.recipe.create({
        data: {
            title: 'peanut butter and jam sandwich',
            instructions: 'spread wet ingredients on bread',
            ingredients: {
                connect: [
                    { title: 'bread' },
                    { title: 'jam' },
                    { title: 'peanut butter' },
                ]
            }
        }
    })

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