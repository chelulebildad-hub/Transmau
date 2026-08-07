import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Analytics from "@/components/Analytics";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Seedlings from "@/pages/Seedlings";
import Orchards from "@/pages/Orchards";
import HoneyBees from "@/pages/HoneyBees";
import TrainingVisits from "@/pages/TrainingVisits";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/seedlings" element={<Seedlings />} />
          <Route path="/orchards" element={<Orchards />} />
          <Route path="/honey-bees" element={<HoneyBees />} />
          <Route path="/training-visits" element={<TrainingVisits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}