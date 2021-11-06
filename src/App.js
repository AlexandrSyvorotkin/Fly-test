import './App.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import RightBlock from "./components/RightBlock/RightBlock";
import ListOfFlights from "./components/ListOfFlights/ListOfFlights";

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
    <div>
      {/*<RightBlock/>*/}
        {isLoaded && <ListOfFlights amountsOfFlights={amountOfFlights}/>}
    </div>
  );
}

export default App;
