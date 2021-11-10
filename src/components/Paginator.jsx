import React, { useState} from 'react';

const Paginator = ({ flightsPerPage, totalFlights, paginate }) => {

    const pageNumbers = []
    for (let i=1; i<= Math.ceil(totalFlights / flightsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='inline mt-2 ml-2 border-2 border-blue-500 p-1 active:bg-red-500'>
                            <a href='!#' onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Paginator;