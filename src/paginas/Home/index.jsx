import Apresentacao from '../../componentes/Apresentacao/index.jsx';
import ComoFunciona from '../../componentes/ComoFunciona/index.jsx';
import Indicadores from '../../componentes/Indicadores/index.jsx';
import Depoimentos from '../../componentes/Depoimentos/index.jsx';
import RevelarAoRolar from '../../componentes/ComponentesPadrao/RevelarAoRolar/revelar.jsx';

function Home(){
  return(
    <>
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
    </>
  )
}

export default Home;
