import Header from './componentes/Header/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import RevelarAoRolar from './componentes/ComponentesPadrao/RevelarAoRolar/revelar.jsx';
import Home from './paginas/Home/index.jsx';


function App(){
  return(
    <>
      <Header></Header>
      <Home/>
      <RevelarAoRolar>
        <Footer></Footer>
      </RevelarAoRolar>
    </>
  )
}

export default App;
