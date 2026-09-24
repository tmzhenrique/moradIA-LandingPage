import Header from './componentes/Header/index.jsx';
import Apresentacao from './componentes/Apresentacao/index.jsx';
import ComoFunciona from './componentes/ComoFunciona/index.jsx';
import Indicadores from './componentes/Indicadores/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import Depoimentos from './componentes/Depoimentos/index.jsx';


function App(){
  return(
    <>
      <Header></Header>
      <Apresentacao id="Apresentacao"/>
      <ComoFunciona id="ComoFunciona"/>
      <Indicadores id="Indicadores"/>
      <Depoimentos id="Depoimentos"/>
      <Footer></Footer>
    </>
  )
}

export default App;