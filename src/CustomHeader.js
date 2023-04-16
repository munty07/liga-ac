import logo from './logo.svg';
import './CustomHeader.css';
function CustomHeader(props) {
    // console.log("props", props);
    return (
        // <header>
        //     <ul>
        //         <li>
        //             <img src={logo} className="App-logo" alt="logo" width="50px" height="50px" />
        //         </li>
        //         <li><a href="#home">Home</a></li>
        //         <li><a href="#contact">Contact</a></li>
        //         <li><a href="#about">About</a></li>
        //     </ul>
        // </header>
        <header className="Header">
            <img src={logo} className="App-logo" alt="logo" width="50px" height="50px" />
            <p>{props.title}</p>
        </header>
    );
}

export default CustomHeader;