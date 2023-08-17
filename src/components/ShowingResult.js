const {useSelector,useDispatch} = ReactRedux;
import store from "./../store.js"
import {searchQuery,searchedExerciseDataFuc} from "./../actions/index.js"
import Exercise from "./Exercise.js"
const { Button, Stack, Typography } = MaterialUI;
const {useState,useEffect}=React;
const {Pagination} =MaterialUI;
import {fetchData,exerciseOptions} from "../utils/fetchData.js"



let template=`
<Wrapper id="exercises">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: "4rem" }} mb="46px">Showing Results</Typography>
    <div className="exercise_container">
		{currentExercises.map((element,index)=>{
			return (<Exercise key={index} exercise={element}/>);
		})}
	</div>
	
	<Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
		{mySearchedResult.length > 9 && (
		  <Pagination
		    color="standard"
		    shape="rounded"
		    defaultPage={1}
		    count={Math.ceil(mySearchedResult.length / exercisesPerPage)}
		    page={currentPage}
		    onChange={paginate}
		    size="large"
		  />
		)}
	</Stack>
</Wrapper>
`

let loadingTemplate=`
<LoadingWrapper>
		<span>Loading...</span>
</LoadingWrapper>
`




const ShowingResult= () => {
	const mySearchedResult=useSelector((state)=>state.searchedResultData.data);
	const myBodyPart=useSelector((state)=>state.changeBodyPart.query);
	const dispatch=useDispatch();

	const [isLoading,setIsLoading]=React.useState(true)
		
	useEffect(() => {
	  const fetchExercisesData = async () => {
	  	setIsLoading(true)
	    let exercisesData = [];
	
	    if (myBodyPart) {
	        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${myBodyPart}`, exerciseOptions);
	    } else {
	      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
	    }
	
		dispatch(searchedExerciseDataFuc(exercisesData))
		setIsLoading(false)
	  };
	  
	  fetchExercisesData();
	}, [myBodyPart]);
		
		
	const [currentPage, setCurrentPage] = useState(1);
	const [exercisesPerPage,setExercisesPerPage] = useState(6);


	// Pagination
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = mySearchedResult.slice(indexOfFirstExercise, indexOfLastExercise);
	
	

	
	
	const paginate = (event, value) => {
	  setCurrentPage(value);
	
	};
	
	const LoadingWrapper=styled.section`
		display:flex;
		align-items:center;
		justify-content:center;
		height:240px;
		background:rgb(249 249 255);
		min-height:240px;
		width:100%;
		
		span{
			font-size:3rem;
			font-weight:800;
		}
	`
	
	const Wrapper=styled.section`
		padding:5px 50px;
		.exercise_container{
			display:flex;
			align-items:center;
			justify-content:space-around;
			flex-wrap:wrap;
			text-decoration:none;
		}
	`


	console.log(mySearchedResult)
	
	
	if(isLoading){
		return (
			eval(Babel.transform(loadingTemplate, { presets: ['es2017', 'react'] }).code)
		);
	}
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default ShowingResult