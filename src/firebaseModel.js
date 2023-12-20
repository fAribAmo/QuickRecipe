
import { initializeApp } from "firebase/app";
import { getRecipeInformation } from "/src/recipeSource.js";
import { getDatabase, ref, get, set, onValue, child, onChildAdded, onChildRemoved, off} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
const PATH="Recipe_by_ingredient_search_app/USERID"; 
export const auth = getAuth(app);
const buttonInNavbar = document.getElementById('signIn');

if (buttonInNavbar) {
    buttonInNavbar.innerHTML = auth.currentUser;
}

export function modelToPersistence(model) {
    function iterateIngredientsACB(ingredient) {
        return ingredient;
    }
    function iterateDietsACB(diet) {
        if(diet) {
            return diet;
        }
    }
    function evaluateUser() {
        if(auth.currentUser) {
            return auth.currentUser;
        }
    }
    return {
        ingredients : model.ingredientArray.map(iterateIngredientsACB).sort(),
  //      currentRecipe : model.currentRecipe !== undefined ? model.currentRecipe : null,
 //       specDiets : model.specialDiets ? model.specialDiets.map(iterateDietsACB).sort() : [],
        //currentUsaer : evaluateUser()
    };
}

export function persistenceToModel(data, model) {
    if(data){ //om reaktiva objekt har ändrat tillstånd

   //     model.currentRecipe = data.currentRecipe;
    //    model.specialDiets = data.specDiets;
        //setUserIf()
        return saveToModelACB(data.ingredients || []); 
    } else { //om inget ändrats
        model.ingredientArray = []
        model.currentRecipe = null
        model.specialDiets = []
        //setUserIf()
        return saveToModelACB([]);
    }
    
    function saveToModelACB(returnedIngredients) {
        model.ingredientArray = returnedIngredients;
    }
    function setUserIf() {
        if(data.currentUsaer) {
            model.user = data.currentUsaer;
        }
    }
}

export function saveToFirebase(model){
    if(model.ready && model.user) {
        set(ref(db, PATH+"/"+model.user.uid), modelToPersistence(model))
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
    return get(ref(db, PATH+"/"+ model.user.uid)).then(convertACB).then(setModelReadyACB)
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
     //       model.currentRecipe,
       //     model.specialDiets
        ]
    }

    function sideEffectACB() {
        saveToFirebase(model)
    }
}
