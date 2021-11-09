import {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import ListOfFlights from "./components/ListOfFlights";
import FlightLogo from '../src/assets/img/flightsLogo.png'
import RightBlock from "./components/RightBlock";
import Paginator from "./components/Paginator";

function App() {

    const [amountOfFlights, setAmountOfFlights] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [flightsPerPage] = useState(10)

    const url = 'http://localhost:3001/result'

    // useEffect(() => {
    //     const getFlights = async () => {
    //         setIsLoaded(true)
    //         const res = await axios.get(url)
    //         setAmountOfFlights(res.data)
    //         setIsLoaded(false)
    //     }
    //     getFlights()
    // }, [])

    useEffect(() => {
        axios.get(url)
            .then(({data}) => {
                setAmountOfFlights(data)
                setIsLoaded(true)
            })

    }, [])

    const lastFlightIndex = currentPage * flightsPerPage
    const firstFlightIndex = lastFlightIndex - flightsPerPage
    const currentFlight = amountOfFlights?.flights?.slice(firstFlightIndex, lastFlightIndex)
    // console.log(currentFlight)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev +1)
    const prevPage = () => setCurrentPage(prev => prev -1)


    return (
        <>
            {/*<div className='bg-blue-300 flex justify-between items-center'>*/}
            {/*    /!*<div className='w-16 h-16 pl-2 pr-2'>*!/*/}
            {/*    /!*    <img className='bg-cover' src={FlightLogo} alt="flightLogo"/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<h1 className='text-4xl text-center p-2 italic text-indigo-500'>FlightsService.ru</h1>*!/*/}
            {/*</div>*/}
            <div className='flex justify-center mb-2 mt-2'>
                <Paginator flightsPerPage={flightsPerPage} totalFlights={313} paginate={paginate}/>
            </div>
            <div className='mt-2 mb-2  flex justify-center'>
                <button onClick={prevPage} className='mr-2 border-2 border-blue-500 p-1'>Prev</button>
                <button onClick={nextPage} className='border-2 border-blue-500 p-1'>Next</button>
            </div>
            <div className='flex justify-center'>
                <RightBlock/>
                {/*<ListOfFlights amountOfFlights={amountOfFlights} isLoaded={isLoaded}/>*/}
                {isLoaded && <ListOfFlights amountOfFlights={currentFlight}/>}
                {/*<ListOfFlights amountsOfFlights={amountOfFlights} isLoaded={isLoaded}/>*/}
            </div>

        </>
    );
}

export default App;
