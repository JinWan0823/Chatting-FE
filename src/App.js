import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./main";
import MainLogin from "./Login/MainLogin";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLogin />}></Route>
          <Route path="/chat" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
