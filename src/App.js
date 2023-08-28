import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";
import Navbar from "./Navbar";
import Offers from "./Offers";
import Plan from "./Plan";
import Rooms from "./Rooms";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
