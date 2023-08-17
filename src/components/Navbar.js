const {Stack}=MaterialUI;
const {Link}=ReactRouterDOM;
const Logo="../src/assets/images/Logo.png"

let template=`
	<Nav>
	  <figure className="img_container">
		  <img src={Logo} />
	  </figure>
	  <div className="nav_links">
		  <li>
		    <Link style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '2px solid #FF2625' }} to="/" >Home</Link>
		  </li>  
		  <li>
		    <a href="#exercises">Exercises</a>
		  </li>
	  </div>
	</Nav>
`

const Navbar = () => {
	const Nav=styled.nav`
		display:flex;
		align-items:center;
		height:100px;
		padding:5px 15px;
		background:rgb(249 249 255);
		width:100%;
		.img_container{
			height:100%;
			display:flex;
			align-items:center;
			justify-content:center;
			margin-right:1rem;
			img{
				width:;
				height:90%;
			}
		}
		
		.nav_links{
			display:flex;
			li{
				margin:0px 8px;
				list-style: none;
				a{
					text-decoration:none;
					margin:0px 4px;
					color:black;
					font-size:2.5rem;

				}
			}
		}
		
		@media screen and (max-width:768px) {
			height:70px;
		}
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Navbar