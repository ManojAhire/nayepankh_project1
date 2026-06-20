import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Impact from "./components/Impact";
import Programs from "./components/Programs";
import Volunteer from "./components/Volunteer";
import Events from "./components/Events";

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Hero />} />
            </Routes>
        </div>
    );
}