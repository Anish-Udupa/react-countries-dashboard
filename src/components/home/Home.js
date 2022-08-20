import "./Home.css";
import SearchBar from "./components/searchbar/SearchBar";
import Filter from "./components/filter/Filter";
import CountryList from "./components/country-list/CountryList";

function Home(){
    return (
        <div id="home-container">
            <div id="config-container">
                <SearchBar />
                <Filter />
            </div>
            <CountryList />
        </div>
    )
}

export default Home;