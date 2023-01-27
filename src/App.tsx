import Home from './pages/Home';
import Estados from './pages/Estados';
import Aspas from './pages/Aspas';
import Contadores from './pages/Contadores';
import ConvertCases from './pages/ConvertCases';
import ConvertKeyWord from './pages/ConvertKeyWord';
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
          <Route path="/contador" element={<Contadores />} />
          <Route path="/conversor-cases" element={<ConvertCases />} />
          <Route path="/conversor-keyword" element={<ConvertKeyWord />} />
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