import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import ColorSchemeButton from './Color';
import { MantineProvider, createTheme } from '@mantine/core';

const title = 'Hello World from new React Blog';
const likes = 50;

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});

function App() {
  return (
    <Router>
      <div className="App">
        <MantineProvider theme={theme}>
          <ColorSchemeButton/>
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
          </div>
        </MantineProvider>
      </div>
    </Router>
  );
}

export default App;
