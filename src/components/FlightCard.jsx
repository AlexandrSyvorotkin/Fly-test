import React from 'react';
import Button from "../UI/Button";
import {AiOutlineClockCircle, BsArrowRight} from "react-icons/all";


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
                        airlineCompany,
                        departureAirportUid,
                        arrivalAirportUid
                    }) => {

    const minutesToString = function (number) {
        const hours = Math.floor(number / 60);
        const minutes = number % 60;
        return `${hours} ч. ${minutes} мин.`;
    }

    const formatDate = function (str) {
        const date = new Date(str);
        // console.log(date.toLocaleDateString("ru-RU"));
        let h = date.getHours().toString();
        h = h.length == 1 ? "0" + h : h;
        let m = date.getMinutes().toString();
        m = m.length == 1 ? "0" + m : m;
        const timeStr = `${h}:${m}`;

        let d = date.getDate();
        // console.log(date)
        // console.log(d);

        // return ({ dateStr, timeStr });

        function month(n) {
            switch (n) {
                case 0:
                    return "янв.";
                case 1:
                    return "фев.";
                case 2:
                    return "мар.";
                case 3:
                    return "апр.";
                case 4:
                    return "май.";
                case 5:
                    return "июн.";
                case 6:
                    return "июл.";
                case 7:
                    return "авг.";
                case 8:
                    return "сен.";
                case 9:
                    return "окт.";
                case 10:
                    return "нояб.";
                case 11:
                    return "дек.";
            }
        }
    }

    formatDate(departureDate);

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
                <div>{departureDate}</div>
                {/*<AiOutlineClockCircle/>*/}
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <AiOutlineClockCircle size='1.5rem'/>
                    </div>
                    {minutesToString(travelDuration)}
                </div>
                <div>{arrivalDate}</div>

            </div>
            <hr className='mt-2'/>


            {/*<span>{formatDate(departureDate).dateStr}</span>*/}
            <div className='text-xl mt-2 mb-2'>Рейс выполняет: {airlineCompany}</div>
            <div className='bg-blue-300 w-full h-1 mb-2'></div>
            <Button>Выбрать</Button>
        </div>
    );
};

export default FlightCard;