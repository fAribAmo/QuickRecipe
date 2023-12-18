
import { initializeApp } from "firebase/app";
import { getRecipeInformation } from "/src/recipeSource.js";
import { getDatabase, ref, get, set, onValue, child, onChildAdded, onChildRemoved, off} from "firebase/database";
import firebaseConfig from "/src/firebaseConfig.js";
import { getAuth, signInWithPopup, 
         signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
const PATH="Recipe_by_ingredient_search_app/USERID"; 
const rf = ref(db, PATH)
export const auth = getAuth(app);
const buttonInNavbar = document.getElementById('signIn');

if (buttonInNavbar) {
    buttonInNavbar.innerHTML = auth.currentUser;
}

export function modelToPersistence(model) {
    function tranformToDishIDSACB(ingredient) {
        return ingredient;
    } 
    return {
        ingredientIDs : model.ingredientArray.map(tranformToDishIDSACB).sort()
    };
}

export function persistenceToModel(data, model) {
    if(data){ //om reaktiva objekt har ändrat tillstånd
        
        //kanske måste ändra till att söka efter url
        //id:t nedan ska ändras till data.ingredientID:s
        return getRecipeInformation(11352).then(saveToModelACB);
    } else { //om inget ändrats
        model.ingredientArray = []
        //samma som övre kommentar
        return getRecipeInformation(11352).then(saveToModelACB)
    }
    
    function saveToModelACB(returnedIngredients) {
        model.ingredientArray = returnedIngredients;
    }
}

export function saveToFirebase(model){
    if(model.ready && model.user) {
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

export default function connectToFirebase(model, watchFunction) {
    function loginOrOutACB(user) {
        if (model.user) {
            buttonInNavbar.innerHTML="user "+(user?" ID "+user.uid:user);
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
        ]
    }

    function sideEffectACB() {
        saveToFirebase(model)
    }
}
