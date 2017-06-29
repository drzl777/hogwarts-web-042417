import React from 'react'

const Details = (props) => {
  return (
    <div>
      <h1>{props.hog.name}</h1>
      <p>Specialty: {props.hog.specialty}</p>
      <p>{props.hog.greased ? 'Is Greased' : 'Is Not Greased'}</p>
      <p>Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Highest medal achieved: {props.hog['highest medal achieved']}</p>
    </div>
  )
}

export default Details
