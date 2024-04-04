import { useRoutes, Routes, Route } from "react-router-dom";
import "./App.css";
import AppFooter from "./components/app-footer/app-footer";
import NotFound from "./components/404/404";
import Home from "./pages/home";
import About from './pages/about';
import Contact from "./pages/contact";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    <AppFooter />
    </>
  );
}

export default App;
