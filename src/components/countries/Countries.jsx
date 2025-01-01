import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountry = country => {
        // Avoid adding duplicates to visitedCountry
        if (!visitedCountry.find(c => c.cca3 === country.cca3)) {
            const newC = [...visitedCountry, country];
            setVisitedCountry(newC);
        }
    };
    // const handleVisitedFlag = flag = > {

    // }
    const handleVisitedFlag = flag => {
        console.log('add flag');

        const newf = [...visitedFlag, flag];
        setVisitedFlag(newf);

    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountry.length}</h3>
                <ol>
                    {visitedCountry.map(country => (
                        <li key={country.cca3}>{country.name.common}</li>
                    ))}
                </ol>
                <h3>Visited Country Flags</h3>
                <div className="flag-container">
                    <ol>
                        {
                            visitedFlag.map(flag => (
                                <li>
                                    <img src={flag.flags.png} alt="" />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
            <div className="country-container">
                {countries.map(country => (
                    <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
