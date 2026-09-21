import Header from './componentes/Header/index.jsx';
import Apresentacao from './componentes/Apresentacao/index.jsx';
import ComoFunciona from './componentes/ComoFunciona/index.jsx';
import Indicadores from './componentes/Indicadores/index.jsx';
import Footer from './componentes/Footer/index.jsx';


function App(){
  return(
    <>
      <Header></Header>
      <Apresentacao id="Apresentacao"></Apresentacao>
      <ComoFunciona id="ComoFunciona"></ComoFunciona>
      <Indicadores id="Indicadores"></Indicadores>
      <Footer></Footer>
    </>
  )
}

export default App;