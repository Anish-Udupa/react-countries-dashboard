function SearchBar(){

    const inputChangeHandler = (e) => {
        console.log(`${e.target.value}`)
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