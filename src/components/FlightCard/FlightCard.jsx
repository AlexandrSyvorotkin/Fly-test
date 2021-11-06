import React from 'react';
import classes from "./FlightCard.module.css";


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
        <div className={classes.flightCard}>
            <div>{departureCity}</div>
            <div>{arrivalCity}</div>
        </div>
    );
};

export default FlightCard;