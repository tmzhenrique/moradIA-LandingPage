import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './componentes/Header/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import RevelarAoRolar from './componentes/ComponentesPadrao/RevelarAoRolar/revelar.jsx';
import Home from './paginas/Home/index.jsx';
import EncontrarCidade from './paginas/EncontrarCidade/index.jsx';
import NaoEncontrada from './paginas/NaoEncontrada/index.jsx';


function App(){
  return(
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/encontrar-cidade" element={<EncontrarCidade/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <RevelarAoRolar>
        <Footer></Footer>
      </RevelarAoRolar>
    </BrowserRouter>
  )
}

export default App;
