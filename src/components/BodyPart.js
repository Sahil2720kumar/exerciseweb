const { Box, Stack, Typography, Button,TextField} =MaterialUI;
const Logo="src/assets/icons/gym.png"
const {useSelector,useDispatch} = ReactRedux;
import store from "./../store.js"
import {bodyPartFun} from "./../actions/index.js"

let template=`
	<Wrapper onClick={()=>dispatch(bodyPartFun(name))} >
		<figure className="img_container">
			<img src={Logo} />
		</figure>	
		<p>{name}</p>
	</Wrapper>
`

const BodyPart= ({name,id}) => {
	const myBodyPart=useSelector((state)=>state.changeBodyPart);
	const dispatch=useDispatch();
	
	const Wrapper=styled.section`
		background:rgb(249 249 255);
		width:200px;
		min-width:200px;
		height:230px;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		margin:0px 0.8px;
		.img_container{
			width:100%;
			height:50%;
			display:flex;
			flex-direction:column;
			align-items:center;
			justify-content:center;
			img{
				height:70%;
			}
		}
		
		p{
			margin-top:10px;
			font-size:2rem;
			font-weight:800;

		}
		
		
		&:hover{
			border-top:3px solid #FF2625;
			background: #fff;
			border-bottom-left-radius:20px;
		}
		
		@media screen and (max-width:768px) {
			width:140px;
			min-width:140px;
			height:170px;
		}
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default BodyPart
