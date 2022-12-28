import {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        req: req.query,
        recipes: [
            'Egg',
            'Ketchup',
            'Flour'
        ]
    })
}
