import React from 'react'
import { useParams } from 'react-router-dom'

const City = () => {

  let params = useParams()
  return (
    <div>
      City {params.city}
    </div>
  )
}

export default City
