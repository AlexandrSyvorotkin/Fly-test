import React from 'react';
import FlightCard from "../FlightCard/FlightCard";

const ListOfFlights = ({amountsOfFlights}) => {


    // const flightInformation = amountsOfFlights[0].flight.legs[0].segments[0]
    // console.log(flightInformation.arrivalAirport.caption)

    // for (let i = 0; i < flights.length; i++) {
    //     renderFlight(flights[i]);
    // }

    // function renderFlight(obj) {
    //     const flight = obj.flight.legs[0].segments[0];
    //     console.log(flight.airline);

    // const flightInformation = amountsOfFlights[0].flight
    // console.log(amountsOfFlights)

    const data = amountsOfFlights.flights.map(it => {
        return it
    })

    const newData = data.map(it => it.flight)

    // console.log(amountsOfFlights)
    // console.log(data)
    // console.log(newData)

    const carriers = newData.map(it => it)
    // console.log(carriers)

    // const arrivalCities = carriers.map(it => {
    //     return it.legs[0].segments[0].arrivalCity.caption
    // })
    //
    // const departureCities = carriers.map(it => {
    //     return it.legs[0].segments[0].departureCity.caption
    // })

    // console.log(departureCities)
    // console.log(arrivalCities)

    return (
        <div>
            {/*{!flightInformation && flightInformation.map(it => <FlightCard*/}
            {/*    // airlineLogo={}*/}
            {/*    // price={}*/}
            {/*    departureCity={it.departureCity.caption}*/}
            {/*    // departureDate={}*/}
            {/*    departureAirport={it.departureAirport.caption}*/}
            {/*    arrivalCity={it.arrivalCity.caption}*/}
            {/*    // arrivalDate={}*/}
            {/*    arrivalAirPort={it.arrivalAirport.caption}*/}
            {/*    // travelDuration={}*/}
            {/*    // isTransferOrNot={}*/}
            {/*    // AirlineCompany={}*/}
            {/*{!flightInformation && flightInformation.map()}*/}
            {carriers.map((it, i) => {
                return (<FlightCard
                    key={i}
                    price={it.price.total.amount}
                    departureCity={it.legs[0].segments[0].departureCity.caption}
                    arrivalCity={it.legs[0].segments[0].arrivalCity.caption}
                />)
            })}

        </div>
    );
};

export default ListOfFlights;