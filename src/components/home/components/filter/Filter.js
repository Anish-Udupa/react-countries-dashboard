import "./Filter.css";

function Filter({setFilterValue}){
    const filterHandler = (e) => {
        setFilterValue(e.target.value);
        console.log("in filter");
    }
    return (
        <select id="filter" onChange={filterHandler}>
            <option style={{display: "none"}}>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

export default Filter;