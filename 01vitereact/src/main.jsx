import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js";
import App from './App.jsx'
// import Anubhav from './anubhav'


// function MyApp() {
//     return (
//       <>
//         <Anubhav />
//         <h1>this is a heading.</h1>
//         <p>This is a paragraph.</p>
//       </>
//     );
// }


// const reactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     children: "Click me to visit google.",
// };

// const anotherEL = (
//     <a href="https://google.com" target="_blank">Click me</a>
// )

const username = "Anubhav";

// below is an evaluated expression
const anAnotherEl = React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank'},
    'click me to visit google ',
    username
);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    // reactElement
    // anotherEL
    anAnotherEl
)
