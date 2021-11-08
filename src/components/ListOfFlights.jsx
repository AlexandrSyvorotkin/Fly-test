import React from 'react';
import FlightCard from "./FlightCard";

const ListOfFlights = ({amountsOfFlights}) => {

    // console.log(amountsOfFlights)
    const data = amountsOfFlights.flights.map(it => it )
    const newData = data.map(it => it.flight)
    const carriers = newData.map(it => it)
    console.log(carriers)

    // const arrivalCities = carriers.map(it => {
    //     return it.legs[0].segments[0].arrivalCity.caption
    // })
    //
    // const departureCities = carriers.map(it => {
    //     return it.legs[0].segments[0].departureCity.caption
    // })

    // console.log(departureCities)
    // console.log(arrivalCities)
    // console.log(data[0].flightToken)
    return (
        <div className='mt-3'>

            {carriers.map((it, i) => {
                const { departureCity,
                        arrivalCity,
                        departureDate,
                        arrivalDate,
                        arrivalAirport,
                        departureAirport,
                        travelDuration,
                } = it.legs[0].segments[0];
                return (<FlightCard
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
                />)
            })}

        </div>
    );
};

export default ListOfFlights;