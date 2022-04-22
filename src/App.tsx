import { useState } from 'react'
import Convert from './components/Convert'
import Info from './components/Info';
import svgInfoEye from './img/eye_question.svg'
import svgInfoPaper from './img/paper.svg'

export default function App() {
  const [isInfo, setIsInfo] = useState(false);

  function handleClick() {
    setIsInfo(prevIsInfo => !prevIsInfo)
  }

  return (
    <div className="App">
      {(!isInfo) ? <Convert /> : <Info />}

      <button className='btnPage' onClick={handleClick} aria-label="Botão para mudar de página">
        <img width="60px" height="60px" src={(!isInfo) ? svgInfoEye : svgInfoPaper} alt={(!isInfo) ? "Imagem de olho" : "Imagem de papel"} />
        <span>{(!isInfo) ? "Infos" : "Voltar"}</span>
      </button>
    </div>
  )
}