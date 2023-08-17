

const { Box, Stack, Typography, Button} =MaterialUI;
const HeroBannerImage = '../src/assets/images/banner.png';

let template=`
	<Wrapper>
	  <Typography className="hero_title" color="#FF2625" fontWeight="600" fontSize="">Fitness Club</Typography>
	  <Typography className="hero_slogan" fontWeight={700} sx={{ fontSize: { lg: '', xs: '' } }} mb="20px" mt="30px">
	    Sweat, Smile <br />
	    And Repeat
	  </Typography>
	  <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
	    Check out the most effective<br/> exercises personalized to you
	  </Typography>
	  
	  <Button>
	    <a href="#">Explore Exercises</a>
	  </Button>
	  
	  <Typography className="hero_hideText" fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: {  } }}>
	    Exercise
	  </Typography>
	  <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
	</Wrapper>
`

const HeroSection= () => {
	const Wrapper=styled.section`
		padding:40px 0px 0px 50px;
		overflow-x:hidden;
		.hero_title{
			font-size:4.2rem;
		}
		
		.hero_slogan{
			font-size:3.7rem;
		}
		
		
		button{
			margin-top:25px;
			padding:1.8rem 2rem;
			background:#FF2625;
			
			a{
				text-decoration: none;
				color:white;
				font-size:1.5rem;
				font-weight:700;
			}
			&:hover{
				background: black;
			}
		}
		
		.hero_hideText{
			font-size:15.7rem;
		}
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default HeroSection