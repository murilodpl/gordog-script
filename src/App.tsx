import Home from './pages/Home';
import Info from './pages/Info';
import Parabens from './pages/Parabens';

import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/parabens" element={<Parabens />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  )
}