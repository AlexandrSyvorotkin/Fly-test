import {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import ListOfFlights from "./components/ListOfFlights";
import FlightLogo from '../src/assets/img/flightsLogo.png'
import RightBlock from "./components/RightBlock/RightBlock";

function App() {

    const [amountOfFlights, setAmountOfFlights] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const url = 'http://localhost:3001/result'

    useEffect(() => {
        axios.get(url)
            .then(({data}) => {
                // const {flights} = data
                setAmountOfFlights(data)
                setIsLoaded(true)
            })

    }, [])

    return (
        <div className='w-1/2 m-0 m-auto'>
            {/*<div className='bg-blue-300 flex justify-between items-center mr-6'>*/}
            {/*    <div className='w-16 h-16 pl-2 pr-2'>*/}
            {/*        <img className='bg-cover' src={FlightLogo} alt="flightLogo"/>*/}
            {/*    </div>*/}
            {/*    <h1 className='text-4xl text-center p-2 italic text-indigo-500'>FlightsService.ru</h1>*/}
            {/*</div>*/}
            <div className=' flex justify-between'>
                <RightBlock/>
                {isLoaded && <ListOfFlights amountsOfFlights={amountOfFlights}/>}
            </div>
        </div>
    );
}

export default App;
