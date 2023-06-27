function SearchBar({setSearchValue}){

    const inputChangeHandler = (e) => {
        const search_value = e.target.value.trim()
        if(search_value === "")
            setSearchValue(null)
        else
            setSearchValue(search_value)
    }

    return(
        <div>
            <input 
                id="searchbar" 
                type="text" 
                placeholder="Search for a country..." 
                onChange={inputChangeHandler}
            />
        </div>
    );
}

export default SearchBar;