function Filter({setFilterValue}){
    const filterHandler = (e) => {
        setFilterValue(e.target.value);
    }
    return (
        <select onChange={filterHandler}>
            <option hidden disabled selected>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

export default Filter;