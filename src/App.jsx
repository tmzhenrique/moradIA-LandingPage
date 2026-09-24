import Header from './componentes/Header/index.jsx';
import Apresentacao from './componentes/Apresentacao/index.jsx';
import ComoFunciona from './componentes/ComoFunciona/index.jsx';
import Indicadores from './componentes/Indicadores/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import Depoimentos from './componentes/Depoimentos/index.jsx';
import RevelarAoRolar from './componentes/ComponentesPadrao/RevelarAoRolar/revelar.jsx';


function App(){
  return(
    <>
      <Header></Header>
      <RevelarAoRolar>
        <Apresentacao id="Apresentacao"/>
      </RevelarAoRolar>
      <RevelarAoRolar>
        <ComoFunciona id="ComoFunciona"/>
      </RevelarAoRolar>
      <RevelarAoRolar>
        <Indicadores id="Indicadores"/>
      </RevelarAoRolar>
      <RevelarAoRolar>
        <Depoimentos id="Depoimentos"/>
      </RevelarAoRolar>
      <RevelarAoRolar>
        <Footer></Footer>
      </RevelarAoRolar>
    </>
  )
}

export default App;