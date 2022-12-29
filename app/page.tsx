import IngredientSearch from '../components/IngredientSearch'

export default async function Page() {
    return (
        <div>
            <h1>Start entering the ingredient name to filter. Press enter to add the first ingredient in the list.</h1>
            <IngredientSearch></IngredientSearch>
        </div>
    );

}
