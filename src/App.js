import './App.css';
import AllBags from './components/AllBags/AllBags';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='main-section'>
      <Header></Header>
      <AllBags></AllBags>
      <Footer> </Footer>
    </div>
  );
}

export default App;
