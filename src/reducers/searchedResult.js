const globalInitialState={
	data:[]
}

const searchedResultData=(state=globalInitialState, action)=>{
	if(action.type==="SEARCHED_DATA"){
		return {
			...state,
			data:action.payload
		};
	}
	return state
}

export default searchedResultData