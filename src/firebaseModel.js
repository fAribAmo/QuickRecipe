import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import firebaseConfig from "./firebaseConfig";

const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
const PATH="quickRecipe"; 
const rf = ref(db, PATH)

