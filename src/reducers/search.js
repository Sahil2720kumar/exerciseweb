const globalInitialState={
	query:"",
}

export const changeSearch=(state=globalInitialState, action)=>{
	if(action.type==="SEARCH"){
		return {
			...state,
			query:action.payload
		};
	}
	return state
}