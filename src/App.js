import './App.css';
import { Layout } from 'antd';
import Header from './components/Header.js';
import Carousel from './components/home/Carousel.js';
import PCGamer from './components/home/PCGamer.js';

function App() {

  const { Content, Footer } = Layout;

  return (
    <div className="App">
      <div>
        <Header/>
      </div>

      <Content>
        <Carousel/>
        <PCGamer/>
      </Content>

      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
