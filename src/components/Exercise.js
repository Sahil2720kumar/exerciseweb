const Logo="src/assets/images/Logo.png"
const { Button, Stack, Typography } = MaterialUI;
const {Link}=ReactRouterDOM;

let template=`
	<Wrapper className="exercise-card" >
	  <Link style={{textDecoration:"none"}} to={exercisePathID}>
	    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
         <div className="exercise_category">
		  <Button sx={{  color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
	        {exercise.bodyPart}
		  </Button>
		  <Button sx={{  color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
	        {exercise.target}
		  </Button>
		 </div>
		<Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
		    {exercise.name}
		</Typography>
	  </Link>
	</Wrapper>
`

const Exercise= ({ exercise }) => {
	const exercisePathID=`/exercise/${exercise.id}`;
	const Wrapper=styled.div`
		padding:12px 10px;
		margin:3rem 2rem;
		
		img{

		}
		
		.exercise_category{
			display:flex;
			margin:3px 0px;
		}
		
		&:hover{
		  transform: scale(1.04);
		}
	`
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Exercise
