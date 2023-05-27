import "./App.css";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="siteBody">
        <Homepage></Homepage>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
