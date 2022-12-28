import IngredientSearch from '../components/IngredientSearch'

export default async function Page() {
    return (
        <div>
            <h1>Start entering the ingredient name and choose from the list. Then press enter or Add.</h1>
            <IngredientSearch></IngredientSearch>
        </div>
    );

}
