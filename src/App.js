import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main/>}/>
            <Route path={"/about-me"} element={<AboutMe/>}/>
            <Route path={"/projects"} element={<Projects/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
        </Routes>
    );
};

export default App;