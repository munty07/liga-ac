import logo from './logo.svg';
import './CustomHeader.css';
function CustomHeader(props) {
    // console.log("props", props);
    const isPremium = true;

    // const bool = Boolean(isPremium);
    // const boolean = !!(isPremium); // dubla negare
    return (
        <header className="Header">
            <div style={{ display: "flex" }}>
                <img src={logo} className="App-logo" alt="logo" width="50px" height="50px" />
                {/* {isPremium && <h4>Premium</h4>} */}
                {isPremium ? <h4 className="Premium">Premium</h4> : null}
            </div>
            <p>{props.title}</p>
        </header>
    );
}

export default CustomHeader;