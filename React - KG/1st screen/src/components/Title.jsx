import React from 'react'

const Title = ({name, contactNumber, schoolName}) => {
  return (
    <div>
      <h1> Your name is {name}, contact number is {contactNumber} and your school name is {schoolName} </h1>
    </div>
  )
}

export default Title;