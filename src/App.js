import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path=":artifactId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
