import { useNavigate } from "react-router";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function Header(){
    const navigate = useNavigate();
    const onTitleClick = () => {
        navigate("/");
    }

    const [ isDark, setIsDark ] = useState(false);

    const toggleDarkMode = () => {
        if(isDark) {
            // Switch to light mode
            document.body.classList.remove("dark");
            setIsDark(false);
        }
        else {
            // Switch to dark mode
            document.body.classList.add("dark");
            setIsDark(true);
        }
    }

    return(
        <div id="header-container">
            <p id="header-title" onClick={onTitleClick}>Where in the world?</p>
            <div id="header-dark-mood-container"  onClick={toggleDarkMode}>
                {isDark ? <FontAwesomeIcon icon={faSun} size="lg" /> : <FontAwesomeIcon icon={faMoon} size="lg"  />}
                <p id="dark-mode-text">{isDark ? "Light Mode" : "Dark Mode"}</p>
            </div>
        </div>
    )
}

export default Header;