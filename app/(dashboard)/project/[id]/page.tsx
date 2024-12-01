import React from 'react'

const page = ({params} :{params : {id :string}}) => {
    const {id} = params ;
  return (
    <div>
        <h1>Project Details</h1>
        <h1>Project {id}</h1>
    </div>
  )
}

export default page