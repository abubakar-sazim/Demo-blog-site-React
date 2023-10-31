import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

const title = 'Hello World from new React Blog';
const likes = 50;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/blogs/:id">
              <BlogDetails />
          </Route>

        </Switch>
          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
