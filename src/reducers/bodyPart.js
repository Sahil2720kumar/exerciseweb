const globalInitialState={
	query:"",
}

const changeBodyPart=(state=globalInitialState, action)=>{
	if(action.type==="BODY_PART"){
		return {
			...state,
			query:action.payload
		};
	}
	return state
}

export default changeBodyPart