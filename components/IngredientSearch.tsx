'use client'
import {useForm, SubmitHandler} from "react-hook-form";
import ButtonBrutal from "./buttons/ButtonBrutal";
import {useEffect, useState} from "react";
import AddedIngredient from "./AddedIngredient";
import Button from "./buttons/Button";

type Inputs = {
    example: string,
    exampleRequired: string,
};

// fetch ingredients
async function getIngredients() {
    const res = await fetch('http://localhost:3000/api/ingredients')
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json()
    return data.ingredients
}

export default function IngredientSearch() {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    // map ingredients to datalist options\
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        getIngredients().then((data) => {
            setIngredients(data)
        })
    }, [])

    const ingredientsOptions = ingredients.map((ingredient: string): JSX.Element => {
        return (<option key={ingredient} value={ingredient}/>)
    })

    // addedIngredients used for searching recipes
    const [addedIngredients, setAddedIngredients] = useState<string[]>([])
    // ingredient in the input
    const [ingredient, setIngredient] = useState('')

    function findRecipes() {

    }

    // render
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                {/* include validation with required or other standard HTML validation rules */}
                {ingredient}
                <input {...register('exampleRequired', {required: true})} autoComplete='off' placeholder='Ingredient'
                       value={ingredient}
                       onChange={event => setIngredient(event.target.value)}
                       list='ingredients'
                       className='p-2 m-4'/>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <datalist id='ingredients'>
                    {ingredientsOptions}
                </datalist>
                <Button type="submit"
                        onClick={() => setAddedIngredients([...addedIngredients, ingredient])}>Add</Button>

            </form>

            <ButtonBrutal type="submit" onClick={findRecipes}>Search</ButtonBrutal>
            <ul className='inline-flex flex-row'>
                {addedIngredients.map((ingredient) => {
                    return <AddedIngredient key={ingredient} ingredient={ingredient}></AddedIngredient>
                })}
            </ul>
        </div>

    );
}