import React from 'react'

type Props = {
  character: any
}

const SingleCharacter = ({ character }: Props) => {
  return (
    <div>{character.name}</div>
  )
}

export default SingleCharacter
