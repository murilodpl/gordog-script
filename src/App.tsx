import Home from './pages/Home';
import Estados from './pages/Estados';
import Aspas from './pages/Aspas';
import ContadorLetras from './pages/ContadorLetras';
import ContadorPalavras from './pages/ContadorPalavras';
import Info from './pages/Info';
import Parabens from './pages/Parabens';

import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />

      <div className="relative mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estados" element={<Estados />} />
          <Route path="/aspas" element={<Aspas />} />
          <Route path="/contador-letras" element={<ContadorLetras />} />
          <Route path="/contador-palavras" element={<ContadorPalavras />} />
          <Route path="/info" element={<Info />} />
          <Route path="/parabens" element={<Parabens />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  )
}