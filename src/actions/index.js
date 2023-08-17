export const searchQuery=(getQuery)=>{
	return {
		type:"SEARCH",
		payload:getQuery
	}
}

export const searchedExerciseDataFuc=(data)=>{
	return {
		type:"SEARCHED_DATA",
		payload:data
	}
}

export const bodyPartFun=(bodyPart)=>{
	return {
		type:"BODY_PART",
		payload:bodyPart
	}
}


