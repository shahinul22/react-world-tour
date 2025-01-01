import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: <small>{name?.common}</small> </h3>
            <img src={flags.png} alt="" />
            <h4>Population :  {population} </h4>
            <h4>Area : {area} </h4>
            <h4><small>Code: {cca3} </small></h4>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={()=>handleVisitedFlag(country)}>Flag</button>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {/* {visited && 'Visited'} */}
        </div>
    );
};

export default Country;