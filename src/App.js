import Navbar from './Navbar';
import Home from './Home';

const title = 'Hello World from new React Blog';
const likes = 50;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p> */}
      </div>
    </div>
  );
}

export default App;
