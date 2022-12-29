import {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        req: req.query,
        recipes: [
            {
                'name' : 'omelette',
                'ingredients': ['egg', 'ketchup'],
                'instructions': 'Make an omelette and spray ketchup'
            },
            {
                'name' : 'pancakes',
                'ingredients': ['egg', 'milk', 'flour'],
                'instructions': 'Mix together and fry'
            },
        ]
    })
}
