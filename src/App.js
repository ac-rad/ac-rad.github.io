import { Routes, Route } from "react-router-dom";
import { Landing, About, Footer, Error } from "./components/exports.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
