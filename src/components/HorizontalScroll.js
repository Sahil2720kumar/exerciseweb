import BodyPart from "./BodyPart.js"
import {exerciseOptions,fetchData} from "../utils/fetchData.js"
const { Box, Stack, Typography, Button,TextField} =MaterialUI;
const RightArrowIcon = 'src/assets/icons/right-arrow.png';
const LeftArrowIcon = 'src/assets/icons/left-arrow.png';
const {useEffect,useState}=React;
import Exercise from "./Exercise.js"


let template=`
<MainWrapper>
	<Wrapper className="horizontal_div">
		{isBodyPart ? bodyParts.map((element,index)=>{
				return <BodyPart key={index} name={element} id={index} />
			}
		):data.slice(0,10).map((element,index)=>{
			   return <Exercise key={index} exercise={element}/>
		})}
	</Wrapper>
	<ButtonGroup>
		<img onClick={()=>handleLeftScroll()} src={LeftArrowIcon}/>
		<img onClick={()=>handleRightScroll()} src={RightArrowIcon} />
	</ButtonGroup>
</MainWrapper>
`

let loadingTemplate=`
<LoadingWrapper>
		<span>Loading...</span>
</LoadingWrapper>
`


const HorizontalScroll= ({isBodyPart,data}) => {
	const [bodyParts, setBodyParts] = useState([]);
	const [isLoading,setIsLoading]=useState(false)

	useEffect(() => {
	 if(isBodyPart){
	 	const fetchExercisesData = async () => {
	 	setIsLoading(true)
	 	const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
	 	console.log(bodyPartsData)
	 	setBodyParts(['all', ...bodyPartsData]);
	 	setIsLoading(false)
	 	};
	 	fetchExercisesData();
	 }
	 
	}, []);
	

	
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
	
	const MainWrapper=styled.div`
		position: relative;
		width:100%;
		@media screen and (max-width:768px) {
			html{
				font-size:50%;
			}
		}
	`

	const Wrapper=styled.section`
		display:flex;
		width:100%;
		padding:0.5rem 2rem;
		overflow-x:scroll;
		
	`
	const ButtonGroup=styled.div`
		display:inline-block;
		position: absolute;
		bottom:-40px;
		right:50px;
		
		img{
			width:60px;
			margin:0.4rem 0.6rem;
			transition: all 0.3s ease;
			-webkit-transition: all 0.3s ease 0s;
			-moz-transition: all 0.3s ease 0s;
			-o-transition: all 0.3s ease 0s;
			&:hover{
			   transform: scale(0.9);
			}
		}
		
		@media screen and (max-width:768px) {
			right:0;
			img{
				width:30px;
			}
		}
	`
	


	const handleLeftScroll=()=>{
		const horizontal_Scroll=document.getElementsByClassName("horizontal_div");
		console.log(horizontal_Scroll)

		for(let element of horizontal_Scroll){
			element.scrollBy({
				top: 0,
				left: -150,
				behavior: 'smooth'
				});
			}
	}
		
	
	const handleRightScroll=()=>{
		console.log("scroll right")
		const horizontal_Scroll=document.getElementsByClassName("horizontal_div");
		for(let element of horizontal_Scroll){
			element.scrollBy({
			top: 0,
			left: +150,
			behavior: 'smooth'
			});
		}
	}
	

	if(isLoading){
		return (
			eval(Babel.transform(loadingTemplate, { presets: ['es2017', 'react'] }).code)
		);
	}
	
	
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default HorizontalScroll
