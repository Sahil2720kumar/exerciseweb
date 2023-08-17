const { Box, Stack, Typography, Button,TextField} =MaterialUI;
import {fetchData,exerciseOptions} from "../utils/fetchData.js"
import HorizontalScroll from "./HorizontalScroll.js"
const {useSelector,useDispatch} = ReactRedux;
import store from "./../store.js"
import {searchQuery,searchedExerciseDataFuc} from "./../actions/index.js"

let template=`
	<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
	  <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
	    Awesome Exercises You <br /> Should Know
	  </Typography>
	  <Box position="relative" mb="32px">
	    <TextField
	      height="76px"
	      sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '80vw' }, backgroundColor: '#fff', borderRadius: '40px' }}
		   value={searchInput}
		   onChange={changeSearchInput}
	      placeholder="Search Exercises"
	      type="text"
	    />
	    <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '48px', position: 'absolute', right: '0px',fontSize:"1.5rem" }} >
	      <p>Search</p>
	    </Button>
	  </Box>
	  <Box sx={{ position: 'relative', width: '100%', p: { lg: '2rem', xs: '0rem' } }}>
		<HorizontalScroll isBodyPart={true}/>
	  </Box>
	</Stack>
`

const SearchExercise= () => {
	const [searchInput,setSearchInput]=React.useState("")
	
	const mySearch=useSelector((state)=>state.changeSearch);
	
	const mySearchedResult=useSelector((state)=>state.searchedResultData);


	
	const dispatch=useDispatch();



	const handleSearch=async()=>{
		dispatch(searchQuery(searchInput));
		if (searchInput) {
		
		  const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
		  
		  const searchedExercises = exercisesData.filter(
			  (item) => item.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
			         || item.target.toLowerCase().includes(searchInput.toLocaleLowerCase())
			         || item.equipment.toLowerCase().includes(searchInput.toLocaleLowerCase())
			         || item.bodyPart.toLowerCase().includes(searchInput.toLocaleLowerCase()),
			);
		  
/*		  window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });*/

		  console.log(searchedExercises);

		  dispatch(searchedExerciseDataFuc(searchedExercises));


		}
	  };
	
	

	const changeSearchInput=(e)=> {
		setSearchInput(e.target.value)
	}
	
	
	const Wrapper=styled.section`

	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default SearchExercise