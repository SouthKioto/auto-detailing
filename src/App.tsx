import { SocialsBar } from "@/components/SocialsBar";
import { Gallery } from "./pages/Gallery";
import "./index.css";

import { Main } from "./pages/Main";
import { Footer } from "./static/Footer";
import { Header } from "./static/Header";
import { BrowserRouter, Routes, Route } from "react-router";

export function App() {
  return (
    <>
      <SocialsBar />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
