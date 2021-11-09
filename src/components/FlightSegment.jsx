import React from 'react';
import {AiOutlineClockCircle, BsArrowRight} from "react-icons/all";
import {formatDate, minutesToString} from "../dateFunctions/format-date";

const FlightSegment = ({
                           departureCity,
                           departureAirport,
                           departureAirportUid,
                           arrivalCity,
                           arrivalAirPort,
                           arrivalAirportUid,
                           travelDuration,
                           airlineCompany,
                           arrivalDate,
                           departureDate
                       }) => {

    const arrival = formatDate(arrivalDate);
    const departure = formatDate(departureDate);

    return (
        <>
            <div className='flex justify-start mt-3 items-center text-xl'>
                <div>{departureCity} , {departureAirport}
                    <span className='text-blue-700 ml-2'>({departureAirportUid})</span>
                </div>
                <BsArrowRight size='1.5rem' color='blue' className='mr-4 ml-4'/>
                <div>{arrivalCity} , {arrivalAirPort}
                    <span className='text-blue-700 ml-2'>({arrivalAirportUid})</span>
                </div>
            </div>
            <hr className='mt-2'/>
            <div className='flex justify-between mt-3'>
                <div>{departure.date + " " + departure.time}</div>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <AiOutlineClockCircle size='1.5rem'/>
                    </div>
                    {minutesToString(travelDuration)}
                </div>
                <div>{arrival.date + " " + arrival.time}</div>
            </div>
            <hr className='mt-2'/>
            <div className='text-xl mt-2 mb-2'>Рейс выполняет: {airlineCompany}</div>
        </>
    );
};

export default FlightSegment;