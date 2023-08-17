import HeroSection from "./../components/HeroSection.js"
import SearchExercise from "./../components/SearchExercise.js"
import ShowingResult from "./../components/ShowingResult.js"
import Footer from "./../components/Footer.js"


let template=`
<>
	<HeroSection/>
	<SearchExercise/>
	<ShowingResult />
	<Footer />
</>
`

const Home = () => {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Home