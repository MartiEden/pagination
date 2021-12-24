import React from 'react';

const Countries = ({ loading, countries }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <ul className="list-group mb-2">
                {
                    countries.map((country, i) => {

                        return (
                            <li
                                className="list-group-item"
                                key={`${country.name.common}_${i}`}>

                                <img
                                    className="flag mr-2"
                                    src={country.flags.svg}
                                    alt="flag"
                                    style={{ width: 25 }} />

                                {country.name.common}

                            </li>
                        )
                    })
                }
            </ul>
        </ >
    )
}

export default Countries;
