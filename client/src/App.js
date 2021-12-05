import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./components/home";
import about from "./components/about";
import profile from "./components/profile";
function App() {
  return (
    
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Welcome to Gymkhana IITI</h1>
    //   </header>
    // </div>

    <Router>
      <Routes>
        <Route path="/home" element={<home />}/>
        <Route path="/about" element={<about />}/>
        <Route path="/profile" element={<profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
