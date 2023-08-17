let template=`
<>
<LoadingWrapper>
		<span>Loading...</span>
</LoadingWrapper>
</>
`

const Loader = () => {
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
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Loader