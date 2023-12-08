import {BASE_URL, API_KEY} from "/src/apiConfig.js";
/**This API returns a list of recipes based on the array 
 * of ingredients it receives.*/
export function searchRecipesByIngredients(searchParams){
    //.join(',') query from SearchPagePresenter in searchParams
    const url = BASE_URL+"recipes/findByIngredients?ingredients=" + searchParams;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
        }
    };
    function getTheJSON_ACB(resp){
        if (resp.ok) {
            return resp.json(); 
        }else{
            throw new Error("resp code:", resp.status);
        }
    }
    function keepJustResultArrayACB(param){
        return param.results;
    }
    function catchRecipeError(error){
        throw error;
    }
    return fetch(url, options).then(getTheJSON_ACB).then(keepJustResultArrayACB).catch(catchRecipeError);
}
/**This API utilizes the search parameters entered in the 
 * search bar to provide a list of autocompleted ingredients.*/
export function autoCompleteIngerdient(searchparams){
    const queryType = "?"+"query="+searchparams;
    const url = BASE_URL+"food/ingredients/autocomplete" + queryType;
    const options = {
        method: "GET",
        headers: {
            "X-Mashape-Key": API_KEY,
            'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
        }
    };
    function getTheJSON_ACB(resp){
        if (resp.ok) {
            return resp.json(); 
        }else{
            throw new Error("resp code:", resp.status);
        }
    }
    function keepJustResultArrayACB(param){
        return param.results;
    }
    function catchCompleteIngerdientError(error){
        throw error;
    }
    return fetch(url, options).then(getTheJSON_ACB).then(keepJustResultArrayACB).catch(catchCompleteIngerdientError);
}
/**
This API endpoint retrieves the recipe itself by the property "text", and other information about recipe*/
export function extractRecipeData(recipeURL){
    const newURL = recipeURL.replace(":", "%3A");
    const queryType = "?"+"url="+newURL.replace("/", "%2F");
    const url = BASE_URL+"recipes/extract" + queryType;
    const options = {
        method: "GET",
        headers: {
            "X-Mashape-Key": API_KEY,
            'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
        }
    };
    function getTheJSON_ACB(resp){
        if (resp.ok) {
            return resp.json(); 
        }else{
            throw new Error("resp code:", resp.status);
        }
    }
    function keepJustResultArrayACB(param){
        return param.results;
    }
    function catchRecipeExtractionError(error){
        throw error;
    }
    return fetch(url, options).then(getTheJSON_ACB).then(keepJustResultArrayACB).catch(catchRecipeExtractionError);
}
/**This API endpoint provides a list of recipes that are similar to the one provided. */
 export function recommendedRecipes(recipeID){
    const url = BASE_URL+"recipes/" + recipeID +"/similar";
    const options = {
        method: "GET",
        headers: {
            "X-Mashape-Key": API_KEY,
        }
    };
    function getTheJSON_ACB(resp){
        if (resp.ok) {
            return resp.json(); 
        }else{
            throw new Error("resp code:", resp.status);
        }
    }
    function keepJustResultArrayACB(param){
        return param.results;
    }
    function catchRecommendationError(error){
        throw error;
    }
    return fetch(url, options).then(getTheJSON_ACB).then(keepJustResultArrayACB).catch(catchRecommendationError);
 }