import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./layout/Home";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
