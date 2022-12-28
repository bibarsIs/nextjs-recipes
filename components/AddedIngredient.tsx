export default function AddedIngredient({ingredient} : {
    ingredient: string
}) {
    return (
        <li className='cursor-pointer m-2'>{ingredient}</li>
    );
}