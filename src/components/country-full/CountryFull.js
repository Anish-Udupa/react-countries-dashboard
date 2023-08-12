import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"; 
import "./CountryFull.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function CountryFull() {
    const { state } = useLocation();
    const [ country_data, setCountryData ] = useState(null);
    const navigate = useNavigate();

    const toNumberString = (num) => {
        return Number(num).toLocaleString()
    }

    const getLanguages = (lang) => {
        let languages = ""
        for(let key of Object.keys(lang))
            languages = languages + " " + lang[key];
        return languages
    }

    const getNativeName = (native) => {
        const first_key = Object.keys(native)[0];
        const name = native[first_key].common;
        return name;
    }

    const onBackBtnClick = () => {
        navigate("/");
    }

    const onBorderCountryClick = (name) => {
        navigate("/country", { state: {country_name: name}})
    }

    useEffect(() => {
        const fetchData = async () => {
            const country_name = state.country_name;
            try {
                const api_search_name_endpoint = `https://restcountries.com/v3.1/name/${country_name}?fields=name,nativeName,population,region,subregion,capital,tld,currencies,languages,borders,flags`
                const data = ( await axios.get(api_search_name_endpoint)).data;
                console.log(data);
                setCountryData(data[0]);
            }
            catch(err) {
                console.log("Failed to fetch");
            }
        }
        fetchData();
    }, [state])
    return (
        <div id="country-full-container" onClick={onBackBtnClick}>
            <div id="back-button">
                <FontAwesomeIcon icon={faArrowLeftLong} size="lg" color="dark-gray" />
                <p>Back</p>
            </div>
            {country_data && (<div id="country-full-details-container">
                <div id="country-full-flag-container">
                    <img id="country-full-flag" src={country_data.flags.png} alt={`Flag`} />
                </div>
                <div id="country-full-details">
                    <p className="country-full-heading">{country_data.name.common}</p>
                    <div className="country-full-details-row">
                        <div className="country-full-details-col">
                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Native Name:</p>
                                <p className="country-full-detail-value">{getNativeName(country_data.name.nativeName)}</p>
                            </div>

                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Population:</p>
                                <p className="country-full-detail-value">{toNumberString(country_data.population)}</p>
                            </div>

                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Region:</p>
                                <p className="country-full-detail-value">{country_data.region}</p>
                            </div>

                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Sub Region:</p>
                                <p className="country-full-detail-value">{country_data.subregion}</p>
                            </div>

                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Capital:</p>
                                <p className="country-full-detail-value">{country_data.capital[0]}</p>
                            </div>
                        </div>

                        <div className="country-full-details-col">
                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Top Level Domain:</p>
                                <p className="country-full-detail-value">{country_data.tld[0]}</p>
                            </div>

                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Currencies:</p>
                                <p className="country-full-detail-value">{Object.keys(country_data.currencies)[0]}</p>
                            </div>

                            <div className="country-full-detail-container">
                                <p className="country-full-detail-key">Languages:</p>
                                <p className="country-full-detail-value">{getLanguages(country_data.languages)}</p>
                            </div>
                            
                        </div>

                    </div>
                    <div className="country-full-detail-container">
                        <p className="country-full-detail-key">Border Countries:</p>
                        <div className="country-full-borders-container">
                        {country_data.borders.map(item => <p className="country-full-borders-values" key={item} onClick={() => onBorderCountryClick(item)}>{item}</p>)}
                        </div>
                    </div>
                </div>

            </div>)}
        </div>
    )
}

export default CountryFull;