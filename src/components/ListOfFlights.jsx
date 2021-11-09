import React from 'react';
import FlightCard from "./FlightCard";



const ListOfFlights = ({amountsOfFlights, isLoaded}) => {
    // console.log(amountsOfFlights)

    // if (isLoaded) {
    //    return <h2>keka</h2>
    // }

    const data = amountsOfFlights.flights
    // console.log(data)
    const SegmentFlights = data.map(it => it.flight)
    // console.log(SegmentFlights)

    return (
        <div>
            {SegmentFlights.map((it, i) => {
                // const {
                //     departureCity,
                //     arrivalCity,
                //     departureDate,
                //     arrivalDate,
                //     arrivalAirport,
                //     departureAirport,
                //     travelDuration,
                //     airline
                // } = it.legs[0].segments[0];
                const {segments} = it.legs[0]
                const segmentsInfo = segments.map(it => it)
                const numberOfSegmentsInfo = Object.keys(segmentsInfo)
                // console.log(numberOfSegmentsInfo)
                return (

                        <FlightCard
                        key={i}
                        firstSegmentPrice={it.price.total.amount}
                        firstSegmentDepartureCity={it.legs[0].segments[0].departureCity.caption}
                        firstSegmentArrivalCity={it.legs[0].segments[0].arrivalCity.caption}
                        firstSegmentDepartureDate={it.legs[0].segments[0].departureDate}
                        firstSegmentArrivalDate={it.legs[0].segments[0].arrivalDate}
                        firstSegmentArrivalAirPort={it.legs[0].segments[0].arrivalAirport.caption}
                        firstSegmentDepartureAirport={it.legs[0].segments[0].departureAirport.caption}
                        firstSegmentTravelDuration={it.legs[0].segments[0].travelDuration}
                        firstSegmentAirlineCompany={it.carrier.caption}
                        firstSegmentDepartureAirportUid={it.legs[0].segments[0].departureAirport.uid}
                        firstSegmentArrivalAirportUid={it.legs[0].segments[0].arrivalAirport.uid}

                        secondSegmentDepartureCity={it?.legs[0]?.segments[1]?.departureCity?.caption}
                        secondSegmentArrivalCity={it?.legs[0]?.segments[1]?.arrivalCity?.caption}
                        secondSegmentDepartureDate={it?.legs[0]?.segments[1]?.departureDate}
                        secondSegmentArrivalDate={it?.legs[0]?.segments[1]?.arrivalDate}
                        secondSegmentArrivalAirPort={it?.legs[0]?.segments[1]?.arrivalAirport?.caption}
                        secondSegmentDepartureAirport={it?.legs[0]?.segments[1]?.departureAirport?.caption}
                        secondSegmentTravelDuration={it?.legs[0]?.segments[1]?.travelDuration}
                        secondSegmentAirlineCompany={it?.carrier?.caption}
                        secondSegmentDepartureAirportUid={it?.legs[0]?.segments[1]?.departureAirport.uid}
                        secondSegmentArrivalAirportUid={it?.legs[0]?.segments[1]?.arrivalAirport.uid}

                        segments={numberOfSegmentsInfo}
                    />
                )
            })}

        </div>
    );
};

export default ListOfFlights;