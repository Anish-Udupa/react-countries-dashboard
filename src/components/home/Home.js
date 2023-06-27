import { useState } from "react";
import "./Home.css";
import SearchBar from "./components/searchbar/SearchBar";
import Filter from "./components/filter/Filter";
import CountryCard from "./components/country-list/CountryCard";
import { useEffect } from "react";
import axios from "axios";

function Home(){
    const [ countries, setCountries ] = useState(null);
    const [ filter_value, setFilterValue ] = useState(null);
    const [ search_value, setSearchValue ] = useState(null);
    const api_all_endpoint = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    const api_region_endpoint = "https://restcountries.com/v3.1/region/{region}?fields=name,flags,population,region,capital"
    const api_search_name_endpoint = "https://restcountries.com/v3.1/name/{name}?fields=name,flags,population,region,capital"
    useEffect(() => {
        const getData = async () => {
            const data = (await axios.get(api_all_endpoint)).data;
            const result = data.filter((_, index) => index < 8)
            setCountries(result)
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            if (filter_value != null){
                const url = api_region_endpoint.replace("{region}", filter_value);
                const data = (await axios.get(url)).data;
                const result = data.filter((_, index) => index < 8);
                setCountries(result)
            }
        }
        getData();
    }, [filter_value])

    useEffect(() => {
        const getData = async () => {
            if(search_value != null) {
                const url = api_search_name_endpoint.replace("{name}", search_value);
                try {
                    const res = await axios.get(url)
                    if (res.status === 200) {
                        const data = res.data
                        const result = data.filter((_, index) => index < 8);
                        setCountries(result)
                    }
                    else {
                        setCountries(null)
                    }
                }
                catch (err) {
                    setCountries(null)
                }
                
            }
        }
        getData();
    }, [search_value])

    return (
        <div id="home-container">
            <div id="config-container">
                <SearchBar setSearchValue={setSearchValue} />
                <Filter setFilterValue={setFilterValue} />
            </div>
            <div id="country-card-container">
                {countries == null ? "No countries" : countries.map((country_data, index) => 
                    <CountryCard 
                        key={index}
                        country_flag_url={country_data.flags.png} 
                        country_flag_alt={country_data.flags.alt} 
                        country_name={country_data.name.common} 
                        country_population={country_data.population}
                        country_region={country_data.region}
                        country_capital={country_data.capital[0]}
                    />
                )}
            </div>
        </div>
    )
}

export default Home;