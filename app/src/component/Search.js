import React, {useState} from 'react'

function Search() {
  const [city, setCity] = useState('')
  return (
    <div className="search-card">
        <form onSubmit={handleSubmit}>
          <label>
          Entrez votre ville  : 
            <input type="date" name="dateNaissance" required />
          </label>
          <button type="submit">Calculer</button>
        </form>
    </div>
  )
}

export default Search