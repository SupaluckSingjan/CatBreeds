import { useState, useEffect} from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [catFact, setCatFact] = useState("");

  const showCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
     .then((res) => {
      setCatFact(res.data.fact)
     })
  }

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact")
     .then((res) => {
      setCatFact(res.data.fact)
     })
  }, []);

  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <div class="col-start-2">
        <button 
          className='border-zinc-500 rounded-md bg-blue-100 p-3'
          onClick={showCatFact}
          >
          Show Cat Detail
        </button>

        <div>

          {catFact}
        </div>
      </div>
    </div>
  )
}

export default App
