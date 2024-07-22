// import {Header} from "./components/Landing.jsx";
// import './index.css';
// import {About, Contact} from "./components/Contact.jsx";
// import {Demos} from "./components/Demos.jsx";
// import $ from 'jquery';
// import {useEffect, useState} from "react";
// import drMike from './assets/secret/drmike.png';
//
// function App() {
//     const [secret, setSecret] = useState('');
//     const date = new Date();
//
//     useEffect(() => {
//         const handleKeyPress = (e) => {
//             setSecret((prevState) => {
//                 const newSecret = prevState + e.key;
//                 if (newSecret.includes('12345')) {
//                     const div = document.createElement('div');
//                     div.style.height = '100vh';
//                     div.style.width = '100vw';
//                     div.style.position = 'fixed';
//                     div.style.top = '0';
//                     div.style.left = '0';
//                     div.style.backgroundImage = `url(${drMike})`;
//                     div.style.backgroundSize = 'cover';
//                     div.style.backgroundPosition = 'center';
//                     div.style.zIndex = '9999';
//                     document.body.appendChild(div);
//
//                     setTimeout(() => {
//                         document.body.removeChild(div);
//                     }, 4000);
//
//                     return '';
//                 }
//                 return newSecret;
//             });
//         };
//
//         $(document).on('keypress', handleKeyPress);
//
//         return () => {
//             $(document).off('keypress', handleKeyPress);
//         };
//     }, []);
//
//     const getDayOfWeek = (date) => {
//         const options = { weekday: 'long' }; // Use 'short' for abbreviated day names
//         return new Intl.DateTimeFormat('en-US', options).format(date);
//     };
//
//     return (
//         <>
//             <div className="head">
//                 <div className="headerobjectswrapper">
//                     <header>Allgood Times</header>
//                 </div>
//                 <div className="subhead">Nashville, TN - {getDayOfWeek(date)} {date.getDate()}, {date.getFullYear()}</div>
//             </div>
//             <Header />
//             <About />
//             <Demos />
//             <Contact />
//         </>);
// }
//
//
// export default App;
