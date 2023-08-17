const {Box}=MaterialUI;
const {useParams}=ReactRouterDOM;
const { Typography, Stack, Button } =MaterialUI;
import Loader from "./Loader.js"

let template = `
  <>
	<Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
	  <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
	    Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
	  </Typography>
	  <MainWrapper>
	    {exerciseVideos?.slice(0, 8)?.map((item, index) => (

	      <a
	        key={index}
	        className="exercise-video"
            href={youtubeHref+item.video.videoId}
	        target="_blank"
	        rel="noreferrer"
	      >
	        <img style={{ borderTopLeftRadius: '20px', overflow:'hidden'}} src={item.video.thumbnails[0].url} alt={item.video.title} />
	        <Box>
	          <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
	            {item.video.title}
	          </Typography>
	          <Typography fontSize="14px" color="#000">
	            {item.video.channelName}
	          </Typography>
	        </Box>
	      </a>

	    ))}
	  </MainWrapper>
	</Box>
  </>
`;

let loadTemplate=`
	<Loader/>
`


const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return (eval(Babel.transform(loadTemplate, { presets: ['es2017', 'react'] }).code));

	const youtubeHref=`https://www.youtube.com/watch?v=`
	
	const MainWrapper=styled.section`
			display:flex;
			align-items:center;
			justify-content:space-around;
			flex-wrap:wrap;
			margin-top:5px;
			overflow:hidden;
	`
	
	const Wrapper=styled.div`
		height:100px;
		margin:9px 5px; 
		margin-bottom:9px;
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default ExerciseVideos