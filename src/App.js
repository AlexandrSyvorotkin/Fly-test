import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

    const url = 'http://localhost:3001/result'

    useEffect(() => {
        axios.get(url)
            .then(({data}) => {
                console.log(data)
            })

    }, [])

  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
