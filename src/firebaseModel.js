
import { initializeApp } from "firebase/app";
import { searchRecipesByIngredients, getRecipeInformation } from "/src/recipeSource.js";
import { getDatabase, ref, get, set, onValue, child, onChildAdded, onChildRemoved, off} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
var path="Recipe_by_ingredient_search_app/USERID"; 
export const auth = getAuth(app);
const buttonInNavbar = document.getElementById('signIn');

export function modelToPersistence(model) {
    return {
        ingredients : model.ingredientArray.sort(),
        currentRecipe: model.currentRecipe,
        specialDiets: model.specialDiets.sort(),
        //currentRecipe : model.currentRecipe !== undefined ? model.currentRecipe : null,
        //specDiets : model.specialDiets ? model.specialDiets.map(iterateDietsACB).sort() : [],
    };
}

export function persistenceToModel(data, model) {
    model.ingredientArray = data?.ingredients || [];
    model.currentRecipe = data?.currentRecipe || null;
    model.specialDiets = data?.specialDiets || [];
    model.doSearch().then(() => model.getAllRecipesInformation());
    getRecipeInformation(model.currentRecipe).then(getCurrentRecipeDataACB);
    function getCurrentRecipeDataACB(data){
        if(data !== null){
            model.currentRecipePromiseState.promise = 'foo';
            model.currentRecipePromiseState.error = null;
            model.currentRecipePromiseState.data = data;
        }
    }
}

export function saveToFirebase(model){
    if(model.ready && model.user) {
        set(ref(db, path+"/"+model.user.uid), modelToPersistence(model))
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
    return get(ref(db, path+"/"+ model.user.uid)).then(convertACB).then(setModelReadyACB)
}

export default function connectToFirebase(model, watchFunction) {
    function loginOrOutACB(user) {
        if (user) {
            model.user=user;
            model.ready=false;
            readFromFirebase(model)
        }
    }

    const readFirebaseObject = onAuthStateChanged(auth, loginOrOutACB);
    watchFunction(checkACB, sideEffectACB)
    function checkACB() {
        return [
            model.ingredientArray,
            model.currentRecipe,
            model.specialDiets,
        ]
    }

    function sideEffectACB() {
        saveToFirebase(model)
    }
}
