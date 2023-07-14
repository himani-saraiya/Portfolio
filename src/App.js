import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"
import Contect from "./routes/Contect"
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contect' element={<Contect />} />
      </Routes>

    </div>
  );
}

export default App;
