import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      
        {/* <TextForm heading ="Enter Your Text to Analyze Below"></TextForm> */}
      
      <About></About>
    </>

  );
}

export default App;
