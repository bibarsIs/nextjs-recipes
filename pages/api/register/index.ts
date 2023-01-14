import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    type User = {
        email: string,
        name: string,
        password: string
    }
    const {email, name, password}: User = req.body
    bcrypt.hash(password, 10, async function (err, hash) {
        // Store hash in your password DB.
        console.log(email, name, hash)
        await prisma.user.create({
            data: {
                email,
                name,
                password: hash
            }
        })
    });
    console.log('registered')
    res.status(200)
}
