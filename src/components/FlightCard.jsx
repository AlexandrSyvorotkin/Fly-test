import React from 'react';
import Button from "../UI/Button";
import FlightSegment from "./FlightSegment";

const FlightCard = ({
                        firstSegmentPrice,
                        firstSegmentDepartureCity,
                        firstSegmentDepartureDate,
                        firstSegmentDepartureAirport,
                        firstSegmentArrivalCity,
                        firstSegmentArrivalDate,
                        firstSegmentArrivalAirPort,
                        firstSegmentTravelDuration,
                        firstSegmentAirlineCompany,
                        firstSegmentDepartureAirportUid,
                        firstSegmentArrivalAirportUid,

                        secondSegmentDepartureCity,
                        secondSegmentArrivalCity,
                        secondSegmentDepartureDate,
                        secondSegmentArrivalDate,
                        secondSegmentArrivalAirPort,
                        secondSegmentDepartureAirport,
                        secondSegmentTravelDuration,
                        secondSegmentAirlineCompany,
                        secondSegmentDepartureAirportUid,
                        secondSegmentArrivalAirportUid,
                        segmentsInfo
                }) =>
{
    return (
        <div>
            <div className='bg-blue-500 text-white'>
                <div className='flex justify-between'>
                    <img src='' alt="logo"/>
                    <div className='text-2xl pr-3'>{firstSegmentPrice} Р</div>
                </div>
                <div className='text-right pr-3'>Стоимость для одного пассажира</div>
            </div>

            <FlightSegment
                departureCity={firstSegmentDepartureCity}
                departureAirport={firstSegmentDepartureAirport}
                departureAirportUid={firstSegmentDepartureAirportUid}
                arrivalCity={firstSegmentArrivalCity}
                arrivalAirPort={firstSegmentArrivalAirPort}
                arrivalAirportUid={firstSegmentArrivalAirportUid}
                travelDuration={firstSegmentTravelDuration}
                airlineCompany={firstSegmentAirlineCompany}
                arrivalDate={firstSegmentArrivalDate}
                departureDate={firstSegmentDepartureDate}
                // segments={segmentsInfo}
            />

            <div className='bg-blue-300 w-full h-1 mb-2'></div>

            <FlightSegment
                departureCity={secondSegmentDepartureCity}
                departureAirport={secondSegmentDepartureAirport}
                departureAirportUid={secondSegmentDepartureAirportUid}
                arrivalCity={secondSegmentArrivalCity}
                arrivalAirPort={secondSegmentArrivalAirPort}
                arrivalAirportUid={secondSegmentArrivalAirportUid}
                travelDuration={secondSegmentTravelDuration}
                airlineCompany={secondSegmentAirlineCompany}
                arrivalDate={secondSegmentArrivalDate}
                departureDate={secondSegmentDepartureDate}/>
                {/*segments={segmentsInfo}*/}


            <Button>ВЫБРАТЬ</Button>
        </div>
    );
}
;

export default FlightCard;