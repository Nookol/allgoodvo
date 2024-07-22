import {Landing} from "./components/Landing.jsx";
import './index.css';
import {About} from "./components/About.jsx";
import {Contact} from "./components/Contact.jsx";
import {Demos} from "./components/Demos.jsx";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header.jsx";
export const getDayOfWeek = (date) => {
    const options = {weekday: 'long'};
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

function App() {

    return (
        <>
            <Header/>
            <Landing/>
            <About/>
            <Demos/>
            <Contact/>
            <Footer/>
        </>);
}

export default App;
