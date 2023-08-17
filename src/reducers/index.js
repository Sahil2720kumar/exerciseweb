import {changeSearch} from "./search.js";
const { combineReducers } = Redux;
import searchedResultData from "./searchedResult.js";
import changeBodyPart from "./bodyPart.js"


const rootReducer=combineReducers({
	changeSearch,searchedResultData,changeBodyPart
})

export default rootReducer;