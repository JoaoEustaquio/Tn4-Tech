import "./App.css";
import { Layout } from "antd";
import Header from "./components/home/Header.js";
import Carousel from "./components/home/Carousel.js";
import PCGamer from "./components/home/PCGamer.js";

function App() {
  const { Content, Footer } = Layout;

  return (
  // Main File on the project. Where all other elements are render.

    <div className="App">
      {/* Header of the website where the buttons and icons of social networks are being displayed. */}
      <Header />

      <Content>
        {/* Carousel with both ad and store banners. */}
        <Carousel />

        {/* Area of ​​the website where ads are being displayed. */}
        <PCGamer />
      </Content>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
