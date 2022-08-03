import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/navbar";

// import pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct"
import AddToping from "./pages/AddToping";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-toping" element={<AddToping />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
