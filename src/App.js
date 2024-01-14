import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Images from "./components/Images";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Main />
        <Images />
      </div>
      <Footer />
    </div>
  );
}

export default App;
