import React, {useState} from 'react'
import axios from 'axios'

function Search() {

  const [data, setData] = useState({})
  const [city, setCity] = useState('');
  const apiKey = '24c3c13679707271c4e1bcf369c2e0c2';
  console.log(apiKey)
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={fr}`
  //units=metric => celsius
  const searchCity = (event) => {
      axios.get(apiUrl).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setCity('')
  }


  return (
    <div className="search-card">
      <h3>Est ce que vous devriez prendre votre parapluie aujourd'hui ?</h3>
        <div>
          <input type="text"
            value={city}
            onChange={event => setCity(event.target.value)}/>
          <button onClick={searchCity} type="submit">Entrer</button>
        </div>
        <div className="result"> 
          <div className="city">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <p>{data.main.temp}</p>
          </div>
        </div>
        <div className="catchphrase">

        </div>
    </div>
  )
}

export default Search