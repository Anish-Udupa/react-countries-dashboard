import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({setSearchValue}){

    const inputChangeHandler = (e) => {
        const search_value = e.target.value.trim()
        if(search_value === "")
            setSearchValue(null)
        else
            setSearchValue(search_value)
    }

    return(
        <div id="search-bar-container">
            <FontAwesomeIcon className="search-bar-search" icon={faSearch} color="gray" />
            <input 
                id="search-bar" 
                type="text" 
                placeholder="Search for a country..." 
                onChange={inputChangeHandler}
            />
        </div>
    );
}

export default SearchBar;