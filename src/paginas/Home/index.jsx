import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { rolarAteSecao } from '../../utils/rolarAteSecao.js';
import Apresentacao from '../../componentes/Apresentacao/index.jsx';
import ComoFunciona from '../../componentes/ComoFunciona/index.jsx';
import Indicadores from '../../componentes/Indicadores/index.jsx';
import Depoimentos from '../../componentes/Depoimentos/index.jsx';
import RevelarAoRolar from '../../componentes/ComponentesPadrao/RevelarAoRolar/revelar.jsx';

function Home(){
  const location = useLocation();

  // Quando o Header navega de outra página para a Home, rola até a seção pedida
  useEffect(() => {
    const secao = location.state?.secao;
    if (secao) {
      rolarAteSecao(secao);
    }
  }, [location]);

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
