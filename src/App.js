import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./main";
import MainLogin from "./Login/MainLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLogin />}></Route>
        <Route path="/chat" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
