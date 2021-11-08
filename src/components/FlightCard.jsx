import React from 'react';
import Button from "../UI/Button";
import {AiOutlineClockCircle, BsArrowRight} from "react-icons/all";
import {formatDate, minutesToString} from "../dateFunctions/format-date";
import FlightSegment from "./FlightSegment";

const FlightCard = ({
                        price,
                        departureCity,
                        departureDate,
                        departureAirport,
                        arrivalCity,
                        arrivalDate,
                        arrivalAirPort,
                        travelDuration,
                        isTransferOrNot,
                        airlineCompany,
                        departureAirportUid,
                        arrivalAirportUid
                    }) => {

    return (
        <div>
            <div className='bg-blue-500 text-white'>
                <div className='flex justify-between'>
                    <img src='' alt="logo"/>
                    <div className='text-2xl pr-3'>{price} Р</div>
                </div>
                <div className='text-right pr-3'>Стоимость для одного пассажира</div>
            </div>

            <FlightSegment
                departureCity={departureCity}
                departureAirport={departureAirport}
                departureAirportUid={departureAirportUid}
                arrivalCity={arrivalCity}
                arrivalAirPort={arrivalAirPort}
                arrivalAirportUid={arrivalAirportUid}
                travelDuration={travelDuration}
                airlineCompan={airlineCompany}
                arrivalDate={arrivalDate}
                departureDate={departureDate}
            />

            <div className='bg-blue-300 w-full h-1 mb-2'></div>



            <Button>Выбрать</Button>
        </div>
    );
};

export default FlightCard;