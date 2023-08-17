

let template=`
	<Wrapper>
	  @{new Date().getFullYear()} Sahil Kumar. All Rights Reserved
	</Wrapper>
`

const Footer= () => {
	const Wrapper=styled.footer`
			margin-top:50px;
			background:#FF2625;
			color:white;
			text-align:center;
			padding:15px 10px;
			font-size:1.7rem;
			font-weight:700;
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Footer