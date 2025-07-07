import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Add from './components/Form';
import ListNews from './components/ListNews';
import './App.css'; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Add />} />
            <Route path="/list" element={<ListNews />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
