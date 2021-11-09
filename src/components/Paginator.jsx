import React from 'react';

const Paginator = ({ flightsPerPage, totalFlights }) => {

    const pageNumbers = []
    for (let i=1; i<= Math.ceil(totalFlights / flightsPerPage); i++) {
        pageNumbers.push(i)
    }

    // console.log(Math.ceil(total / flightsPerPage))

    return (
        <div>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a href='!#'>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Paginator;