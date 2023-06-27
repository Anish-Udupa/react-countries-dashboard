import "./CountryCard.css"

function CountryCard({country_flag_url, country_flag_alt, country_name, country_population, country_region, country_capital}){
    return(
        <div className="country-list-container">
            <img src={country_flag_url} alt={country_flag_alt} className="country-flag"/>
            <div className="country-description">
                <p className="country-name">{country_name}</p>
                <div className="country-detail-container">
                    <p className="country-population-heading">Population:</p>
                    <p className="country-population">{country_population}</p>
                </div>
                <div className="country-detail-container">
                    <p className="country-region-heading">Region:</p>
                    <p className="country-region">{country_region}</p>
                </div>
                <div className="country-detail-container">
                    <p className="country-capital-heading">Capital:</p>
                    <p className="country-capital">{country_capital}</p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;