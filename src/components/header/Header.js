import { useNavigate } from "react-router";
import "./Header.css";

function Header(){
    const navigate = useNavigate();
    const onTitleClick = () => {
        navigate("/");
    }

    return(
        <div id="header-container">
            <p id="header-title" onClick={onTitleClick}>Where in the world?</p>
            <div>
                <p id="dark-mode-text">Dark Mode</p>
            </div>
        </div>
    )
}

export default Header;