import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import SingleCharacter from './components/SingleCharacter';

const RickAndMortyPlugin = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character').then(response => {
      return response.json()
    }).then(data => {
      setCharacters(data.results)
    })
  }, [])

  return (
    <div className={styles.container}>
      {characters.map((character: any) => (
        <SingleCharacter character={character} key={character.id} />
      ))}
    </div>
  )
}

export default RickAndMortyPlugin