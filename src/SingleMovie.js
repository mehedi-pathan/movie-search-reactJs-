import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams()
  return (
    <>
      <div>
        Our single movie section {id}
      </div>
    </> 
  )
}

export default SingleMovie 