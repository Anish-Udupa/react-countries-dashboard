import { useNavigate } from "react-router";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function Header(){
    const navigate = useNavigate();
    const onTitleClick = () => {
        navigate("/");
    }

    return(
        <div id="header-container">
            <p id="header-title" onClick={onTitleClick}>Where in the world?</p>
            <div id="header-dark-mood-container">
                <FontAwesomeIcon icon={faMoon} size="lg"  />
                <p id="dark-mode-text">Dark Mode</p>
            </div>
        </div>
    )
}

export default Header;