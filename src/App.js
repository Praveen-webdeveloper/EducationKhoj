import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Interviews from './pages/Interviews';
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import NewsInBrief from './pages/NewsInBrief';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NewsInBrief" element={<NewsInBrief />} />
      </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
