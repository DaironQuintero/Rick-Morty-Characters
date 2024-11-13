import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {//?Creamos la funcion flecha para consumir la API
    const api = await fetch("https://rickandmortyapi.com/api/character")//?Se hace el llamado de la API
    const characterApi = await api.json()//?Le pasamos como parametro la cons api para que nos lo devuelva con un Json
    console.log(characterApi);
    
    setCharacters(characterApi.results);
  }
  
  return (

    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ?( //?Le indicamos que nos muestre los valores que contiene characters
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (//?En caso de que no contenga nada, le decimos que muestre la imagen del home
            //?Los dos puntos indican "Cuando no" (LOS SIMBOLOS <></> es un fragment)
          <> 
          
          <img src={imageRickMorty} alt='Rick & Morty' className='img-home'/>
          <button onClick={reqApi} className='btn-search'>Buscar Personaje</button>

          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
