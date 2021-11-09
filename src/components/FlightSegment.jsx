import React, {useState} from 'react';
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
                           departureDate,
                           segmentsInfo
                       }) => {

    const arrival = formatDate(arrivalDate);
    const departure = formatDate(departureDate);
    // console.log(segmentsInfo)
    const [transfer, setSransfer] = useState(false)
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
                <div className='flex items-center'>
                    <div className='text-xl'>{departure.time}</div>
                    <span className='text-blue-500 ml-2'>{departure.date}</span>
                </div>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <AiOutlineClockCircle size='1.5rem'/>
                    </div>
                    <div className='text-xl'>
                        {minutesToString(travelDuration)}
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='text-blue-500 mr-2'>{arrival.date}</div>
                    <span className='text-xl'>{arrival.time}</span>
                </div>
            </div>
            {transfer ?
                <>
                    <div className='flex justify-center mt-2 items-center'>
                        <span className='w-96 h-0.5 bg-gray-300'></span>
                            <span className='text-yellow-500 text-xl mr-4 ml-4'>1 пересадка</span>
                        <span className='w-96 h-0.5 bg-gray-300'></span>
                    </div>
                </>
                :
                <hr className='mt-2'/>
            }

            {/*{segments.length < 2 ?*/}
            {/*    <>*/}
            {/*        <div className='flex justify-center mt-2 items-center'>*/}
            {/*            <span className='w-96 h-0.5 bg-gray-300'></span>*/}
            {/*                <span className='text-yellow-500 text-xl mr-4 ml-4'>1 пересадка</span>*/}
            {/*            <span className='w-96 h-0.5 bg-gray-300'></span>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*    :*/}
            {/*    <hr className='mt-2'/>*/}
            {/*}*/}

            <div className='text-xl mt-2 mb-2'>Рейс выполняет: {airlineCompany}</div>
            {/*<button onClick={() => setSransfer(true)}>Transfer</button>*/}
            {/*<button onClick={() => setSransfer(false)}>TransferFalse</button>*/}
        </>
    );
};

export default FlightSegment;