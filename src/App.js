import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Nav from "./Nav";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";

function App() {
  return (
  <Router>
		<div className="App">
			<Nav/>
			<div className="main">
				<Switch>
					<Route exact path="/">
						<FirstPage/>
					</Route>
					<Route exact path="/secondpage">
						<SecondPage/>
					</Route>
				</Switch>
			</div>
		</div>
	</Router>
  );
}

export default App;
