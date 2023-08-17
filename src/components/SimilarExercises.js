const {Box}=MaterialUI;
const {useParams}=ReactRouterDOM;
import Loader from "./Loader.js"
const { Typography, Stack, Button} =MaterialUI;
import HorizontalScroll from "./HorizontalScroll.js"


let template = `
  <>
	<Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
	  <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
	    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
	  </Typography>	  
	  <div>
	    {targetMuscleExercises.length !== 0 ? <HorizontalScroll data={targetMuscleExercises} /> : <Loader />}
	  </div>	  
	  <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
	    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
	  </Typography>
	  <div>
	    {equipmentExercises.length !== 0 ? <HorizontalScroll data={equipmentExercises} /> : <Loader />}
	  </div>
	</Box>
  </>
`;

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	const { id } = useParams();
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default SimilarExercises