//import { useState, useEffect} from "react";
import Axios from "axios";
import './App.css';

function App() {

  const getCat = () => {
    Axios.get('https://catfact.ninja/breeds')
    .then(res => {

      const arrData = res.data.data.map((arr) => ({
        ...arr
      }))

      console.log(arrData)

      console.log(arrData)
      }).catch(err => {
        console.log(err)
      })
  }
  

  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <div class="col-start-2">
        <button className="bg-red-100 p-3"
        onClick={getCat}>Get Quote</button>
      </div>
    </div>
  )
}

export default App
