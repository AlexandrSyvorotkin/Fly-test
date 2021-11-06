import React from 'react';


const FlightCard = ({
                        airlineLogo,
                        price,
                        departureCity,
                        departureDate,
                        departureAirport,
                        arrivalCity,
                        arrivalDate,
                        arrivalAirPort,
                        travelDuration,
                        isTransferOrNot,
                        AirlineCompany,
}) => {
    return (
        <div className='flex justify-between'>
            <div>{departureCity}</div>
            <div>{arrivalCity}</div>
        </div>
    );
};

export default FlightCard;