import {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import ListOfFlights from "./components/ListOfFlights";
import RightBlock from "./components/RightBlock";
import Paginator from "./components/Paginator";

function App() {

    const [amountOfFlights, setAmountOfFlights] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [flightsPerPage] = useState(10)

    const url = 'http://localhost:3001/result'


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

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev +1)
    const prevPage = () => setCurrentPage(prev => prev -1)

    return (
        <>
            <div className='flex justify-center mb-2 mt-2'>
                <Paginator flightsPerPage={flightsPerPage} totalFlights={313} paginate={paginate}/>
            </div>
            <div className='mt-2 mb-2  flex justify-center'>
                <button onClick={prevPage} className='mr-2 border-2 border-blue-500 p-1'>Prev</button>
                <button onClick={nextPage} className='border-2 border-blue-500 p-1'>Next</button>
            </div>
            <div className='flex justify-center'>
                <RightBlock amountOfFlights={amountOfFlights}/>
                {isLoaded && <ListOfFlights amountOfFlights={currentFlight}/>}
            </div>

        </>
    );
}

export default App;
