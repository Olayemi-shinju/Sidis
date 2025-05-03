import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Nav from "./navigation/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Launch from "./pages/Launch";
import Resource from "./pages/Resource";
import PopUpForm from "./pages/PopUpForm";
import BackToTop from "./pages/BackToTop";
import SignUp from "./authentication/SignUp";

function AppContent() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/launch";

  return (
    <>
      {!hideNavFooter && <Nav />}
        <BackToTop/>
        <PopUpForm/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/resources" element={<Resource/>}/>
        <Route path="/sign" element={<SignUp/>}/>
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;