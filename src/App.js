import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/style.css"
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
