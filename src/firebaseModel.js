
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import { extractRecipeData } from "/src/recipeSource.js";

import firebaseConfig from "/src/firebaseConfig.js";

const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
const PATH="Recipe_by_ingredient_search_app"; 
const rf = ref(db, PATH)

set(ref(db, PATH+"/test"), "dummy");

export function modelToPersistence(model) {
    function tranformToDishIDSACB(recipe) {
        return recipe.id;
    } 
    return {
        currRecipe : model.currentRecipe,
        ingredientIDs : model.ingredientArray.map(tranformToIDSACB).sort()
    };
}

export function persistenceToModel(data, model) {
    if(data) { //om reaktiva objekt har ändrat tillstånd
        model.currentRecipe = data.currRecipe
        
        //kanske måste ändra till att söka efter url
        return extractRecipeData(data.ingredientIDs || []).then(saveToModelACB);
    } else { //om inget ändrats
        model.currentRecipe = null
        model.ingredientArray = []
        //samma som övre kommentar
        return extractRecipeData(model.ingredientArray).then(saveToModelACB)
    }
    
    //måste ändras så att ingredienserna ändras, inte så att de blir till ett recept
    //gör returnedRecipeIngredients.map eller nånting för att spara alla ingredienser
    function saveToModelACB(returnedRecipeIngredients) {
        model.ingredientArray = returnedRecipeIngredients;
    }
}

export function saveToFirebase(model){
    if(model.ready) {
        set(rf, modelToPersistence(model))
    }
}

export function readFromFirebase(model){
    model.ready = false;
    function convertACB(snapshot) {
        return persistenceToModel(snapshot.val(), model)
    }
    function setModelReadyACB() {
        model.ready = true;
    }
    return get(rf).then(convertACB).then(setModelReadyACB)
}

export default function connectToFirebase(model, watchFunction){
    const readFirebaseObject = readFromFirebase(model)
    watchFunction(checkACB, sideEffectACB)
    function checkACB() {
        return [
            model.currentRecipe,
            model.ingredientArray 
        ]
    }
    function sideEffectACB() {
        saveToFirebase(model)
    }
}
