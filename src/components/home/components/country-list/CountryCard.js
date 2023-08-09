import "./CountryCard.css"
import { useNavigate } from "react-router";

function CountryCard({country_flag_url, country_flag_alt, country_name, country_population, country_region, country_capital}){
    const navigate = useNavigate();

    const toNumberString = (num) => {
        return Number(num).toLocaleString()
    }

    const onCardClick = () => {
        navigate("/country", { state: {country_name}})
    }

    return(
        <div onClick={onCardClick} className="country-list-container">
            <img src={country_flag_url} alt={country_flag_alt} className="country-flag"/>
            <div className="country-description">
                <p className="country-name">{country_name}</p>
                <div className="country-detail-container">
                    <p className="country-detail-key">Population:</p>
                    <p className="country-detail-value">{toNumberString(country_population)}</p>
                </div>
                <div className="country-detail-container">
                    <p className="country-detail-key">Region:</p>
                    <p className="country-detail-value">{country_region}</p>
                </div>
                <div className="country-detail-container">
                    <p className="country-detail-key">Capital:</p>
                    <p className="country-detail-value">{country_capital}</p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;