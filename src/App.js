import BlogDetails from './BlogsDetails';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Create from './create';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (

    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">

          <Switch>

            <Route exact path ='/'>
              <Home/>
            </Route>

            <Route path ='/create'>
              <Create/>
            </Route>

            <Route path ='/blogs/:id'>
              <BlogDetails/>
            </Route>

            <Route path ='*'>
              <NotFound/>
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  
  );
}

export default App;
