
export default function Characters(props) {
    const {characters, setCharacters} = props //?Le indicamos que props va a recibir los que contenga characters
    
    const resetCharacters = () => { //?Funcion para volver al inicio
        setCharacters(null);
    }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver al Inicio</span>
      <div className="container-characters">
        {characters.map((character, index) => ( //?El map nos permite recorrer cada posición 
            <div className="character-container" key={index}>
               <div>
                <img src={character.image} alt={character.name}/>
               </div>
               <h3>{character.name}</h3>
               <h6>
                {character.status === "Alive" ?(
                    <>
                    <span className="alive"/>
                    Alive
                    </>
                ) : (
                    <>
                    <span className="dead"/>
                    Dead 
                    </>
                )}
               </h6>
               <p>
                <span className="text-grey"> Episodios: </span>
                <span>{character.episode.length}</span>
               </p>
               <p>
                <span className="text-grey"> Especie: </span>
                <span>{character.species}</span>
               </p>
            </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver al Inicio</span>
    </div>
  )
}
