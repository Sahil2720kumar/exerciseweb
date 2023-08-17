const {Box}=MaterialUI;
const {useParams}=ReactRouterDOM;
const {useEffect,useState}=React;
import Detail from "./../components/Detail.js"
import ExerciseVideos from "./../components/ExerciseVideos.js"
import SimilarExercises from "./../components/SimilarExercises.js"
import {fetchData,exerciseOptions,youtubeOptions} from "../utils/fetchData.js"
import Footer from "./../components/Footer.js"

let template = `
  <>
	<Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
		<Detail exerciseDetail={exerciseDetail} />
		<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
		<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />	
		<Footer />	 
	</Box>
  </>
`;

const ExerciseDetailPage = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);
	const { id } = useParams();
	
	useEffect(() => {
	  window.scrollTo({ top: 0, behavior: 'smooth' });
	
	  const fetchExercisesData = async () => {
	    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
	    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
	
	    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
	    setExerciseDetail(exerciseDetailData);
	
	    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
	    setExerciseVideos(exerciseVideosData.contents);
	
	    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
	    setTargetMuscleExercises(targetMuscleExercisesData);
	
	    const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
	    setEquipmentExercises(equimentExercisesData);
	  };
	
	  fetchExercisesData();
	}, [id]);
	
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default ExerciseDetailPage