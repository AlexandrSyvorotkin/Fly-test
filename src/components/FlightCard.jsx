import React from 'react';
import Button from "../UI/Button";
import {AiOutlineClockCircle, BsArrowRight} from "react-icons/all";
import fmDate, {minutesToString} from "../fn/format-date";

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

    // const minutesToString = function (number) {
    //     const hours = Math.floor(number / 60);
    //     const minutes = number % 60;
    //     return `${hours} ч. ${minutes} мин.`;
    // }

    const formatDate = function (str) {
        const date = new Date(str);
        let h = date.getHours().toString();
        h = h.length == 1 ? "0" + h : h;
        let m = date.getMinutes().toString();
        m = m.length == 1 ? "0" + m : m;
        const timeStr = `${h}:${m}`;
        const day = date.getDate();
        const month = fmDate.month(date.getMonth());
        const dayOfWeek = fmDate.day(date.getDay());
        const dateStr = `${day} ${month} ${dayOfWeek}`;

        return ({ date: dateStr, time: timeStr });
    }

    const arrival = formatDate(arrivalDate);
    const departure = formatDate(departureDate);

    return (
        <div>
            <div className='bg-blue-500 text-white'>
                <div className='flex justify-between'>
                    <img src='' alt="logo"/>
                    <div className='text-2xl pr-3'>{price} Р</div>
                </div>
                <div className='text-right pr-3'>Стоимость для одного пассажира</div>
            </div>

            <div className='flex justify-start mt-3 items-center text-xl'>
                <div>{departureCity} , {departureAirport}
                    <span className='text-blue-700'>({departureAirportUid})</span>
                </div>
                <BsArrowRight size='1.5rem' color='blue' className='mr-4 ml-4'/>
                <div>{arrivalCity} , {arrivalAirPort}
                    <span className='text-blue-700'>({arrivalAirportUid})</span>
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
                </div>{arrival.date + " " + arrival.time}
                <div>{arrival.date + " " + arrival.time}</div>
            </div>
            <hr className='mt-2'/>
            <div className='text-xl mt-2 mb-2'>Рейс выполняет: {airlineCompany}</div>

            <div className='bg-blue-300 w-full h-1 mb-2'></div>

            <div className='flex justify-start mt-3 items-center text-xl'>
                <div>{departureCity} , {departureAirport}
                    <span className='text-blue-700'>({departureAirportUid})</span>
                </div>
                <BsArrowRight size='1.5rem' color='blue' className='mr-4 ml-4'/>
                <div>{arrivalCity} , {arrivalAirPort}
                    <span className='text-blue-700'>({arrivalAirportUid})</span>
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
                </div>{arrival.date + " " + arrival.time}
                <div>{arrival.date + " " + arrival.time}</div>
            </div>
            <hr className='mt-2'/>
            {/*<span>{formatDate(departureDate).dateStr}</span>*/}
            <div className='text-xl mt-2 mb-2'>Рейс выполняет: {airlineCompany}</div>


            <Button>Выбрать</Button>
        </div>
    );
};

export default FlightCard;