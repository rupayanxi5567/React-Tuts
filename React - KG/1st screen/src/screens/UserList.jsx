import React from 'react'

const UserList = () => {

    let datas = [
        {
            name: "fotyy",
            age: 78,
            rollNo: "5656rfa",
        },
        {
            name: "fotuu",
            age: 784,
            rollNo: "ee5656rfa",
        },
        {
            name: "bulu",
            age: 18,
            rollNo: "tt5656rfa",
        },
    ]

  return (
    <div> {datas.map( (x) => {
        return( 
        <>
            <h1>name = {x.name}, age = {x.age}, roll = {x.rollNo}</h1> 
        </> 
        )
    } )} 
    </div>
  )
}

export default UserList
