import React from 'react';
import FlightCard from "./FlightCard";



const ListOfFlights = ({amountOfFlights, isLoaded}) => {

    const segmentFlights = amountOfFlights.map(it => it.flight)

    return (
        <div>
            {segmentFlights.map((it, i) => {

                const {segments} = it.legs[0]
                const segmentsInfo = segments.map(it => it)
                const numberOfSegmentsInfo = Object.keys(segmentsInfo)
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