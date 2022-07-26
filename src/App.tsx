import Home from './pages/Home';
import Paises from './pages/Paises';
import Info from './pages/Info';
import Parabens from './pages/Parabens';

import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="All">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paises" element={<Paises />} />
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