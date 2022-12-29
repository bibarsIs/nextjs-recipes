import React, {useState} from "react";

export default function IngredientItem({setAddedIngredients, children}: {
    children: string,
    setAddedIngredients: React.Dispatch<React.SetStateAction<string[]>>,
}) {
    const [isAdded, setIsAdded] = useState(false)

    // adds ingredient to addedIngredients array
    function handleClick(ingredient: string) {
        console.log('added')
        setAddedIngredients(prevState => {
            if (prevState.includes(ingredient)) {
                return prevState.filter(word => word !== ingredient)
            } else {
                return [...prevState, ingredient]
            }
        })
        setIsAdded(prevState => !prevState)
    }

    return (
        <li onClick={() => handleClick(children)}
            className={`cursor-pointer select-none font-light m-2 ${isAdded ? 'line-through' : ''}`}>{children}</li>
    );
}