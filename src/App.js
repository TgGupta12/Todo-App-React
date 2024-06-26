import Navbar from "./componenets/navbar";
import Footer from "./componenets/Footer";
import Todos from "./componenets/Todos";
import {Route,Routes} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Todos />}/>
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
