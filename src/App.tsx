import { useState } from 'react'
import Convert from './components/Convert'
import EscapeButton from './components/EscapeButton';
import Info from './components/Info';
import MonkeySound from './components/MonkeySound';
import Parabens from './components/Parabens';
import svgInfoEye from './img/eye_question.svg'
import svgInfoPaper from './img/paper.svg'

export default function App() {
  const [isInfo, setIsInfo] = useState(false);
  const [isTroll, setIsTroll] = useState(false);

  function handleClick() {
    setIsInfo(prevIsInfo => !prevIsInfo)
    setIsTroll(false)
  }

  function handleClickTroll() {
    setIsTroll(prevIsTroll => !prevIsTroll)
  }

  return (
    <div className="App">
      <MonkeySound />
      {(!isTroll) && ((!isInfo) ? <Convert /> : <Info />)}
      {(isTroll) && <Parabens />}

      <button className='btnPage' onClick={handleClick} aria-label="Botão para mudar de página">
        <img width="60px" height="60px" src={(!isInfo) ? svgInfoEye : svgInfoPaper} alt={(!isInfo) ? "Imagem de olho" : "Imagem de papel"} />
        <span>{(!isInfo) ? "Infos" : "Voltar"}</span>
      </button>

      {(!isTroll) && <EscapeButton handle={handleClickTroll} />}
    </div>
  )
}