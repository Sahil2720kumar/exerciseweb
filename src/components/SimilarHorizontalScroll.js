/*const { Box, Stack, Typography, Button,TextField} =MaterialUI;
const RightArrowIcon = '../src/assets/icons/right-arrow.png';
const LeftArrowIcon = '../src/assets/icons/left-arrow.png';
const {useEffect,useState}=React;


let template=`
<MainWrapper>
	<Wrapper id="horizontal_div">
		{bodyParts.map((element,index)=>{
			return <BodyPart key={index} name={element} id={index} />
		}
		)}
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


const SimilarHorizontalScroll= () => {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default SimilarHorizontalScroll*/