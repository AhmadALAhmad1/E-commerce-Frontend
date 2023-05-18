import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
