import { Header } from "./components/Header";
import { Main } from "./Pages/Main";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Products from "./components/Products";
import Contact from "./Pages/Contact"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CardProvider } from "./components/CardContext";
import Bucket from "./Pages/Bucket";

function App() {
  return (
    <CardProvider>
      <Router> {/* Wrap the app with Router */}
      <div className="w-full">
        <Header/>{/* Header uses Link, so Router must wrap it */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<Bucket/>} /> {/* Add Cart route */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </CardProvider> 
  );
}

export default App;
