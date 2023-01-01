import {NextApiRequest, NextApiResponse} from 'next'
import { faker } from '@faker-js/faker';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        [
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
    ])
}
