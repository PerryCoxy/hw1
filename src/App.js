import './App.css';

import Header from './components/Header/index'
import Slider from './components/Slider/index'
import Footer from './components/Footer/index'
import Text from './components/Text/index'


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Text
        element='p'
        children='Какой-то текст'
      />
      <Footer />
    </div>
  );
}

export default App;
