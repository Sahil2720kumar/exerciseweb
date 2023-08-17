import Home from "./pages/Home.js"
import ExerciseDetailPage from "./pages/ExerciseDetailPage.js"
import store from "./store.js"
const {Provider} = ReactRedux;
import Navbar from "./components/Navbar.js"
const {BrowserRouter,HashRouter,Switch,Route}=ReactRouterDOM

let template=`
  <Provider store={store} >
	<HashRouter>
	  <Navbar/>
	  <Switch>
	  	<Route exact path="/" component={Home} />
	    <Route exact path="/exercise/:id" component={ExerciseDetailPage} />
	  </Switch>
	</HashRouter>
  </Provider>
`

const App = () => {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default App