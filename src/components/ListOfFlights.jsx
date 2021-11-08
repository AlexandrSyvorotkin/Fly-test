import React from 'react';
import FlightCard from "./FlightCard";



const ListOfFlights = ({amountsOfFlights}) => {

    const data = amountsOfFlights.flights
    const firstSegmentFlights = data.map(it => it.flight)
    console.log(firstSegmentFlights)

    return (
        <div>
            {firstSegmentFlights.map((it, i) => {

                const {
                    departureCity,
                    arrivalCity,
                    departureDate,
                    arrivalDate,
                    arrivalAirport,
                    departureAirport,
                    travelDuration,
                    airline
                } = it.legs[0].segments[0];
                return (

                        <FlightCard
                        key={i}
                        price={it.price.total.amount}
                        departureCity={departureCity.caption}
                        arrivalCity={arrivalCity.caption}
                        departureDate={departureDate}
                        arrivalDate={arrivalDate}
                        arrivalAirPort={arrivalAirport.caption}
                        departureAirport={departureAirport.caption}
                        travelDuration={travelDuration}
                        airlineCompany={it.carrier.caption}
                        departureAirportUid={departureAirport.uid}
                        arrivalAirportUid={arrivalAirport.uid}
                    />
                )
            })}

        </div>
    );
};

export default ListOfFlights;