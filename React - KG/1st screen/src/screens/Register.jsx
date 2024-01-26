import React from 'react'

const Register = () => {

    // let handleRegFnc = (e) => {
    //     e.preventDefault();
    //     // return <h1>Message submitted</h1>
    //     console.log("object")
    // }

    function handleRegFnc(e) {
        e.preventDefault();
        console.log("objectsssssssss")
    }

    let age = 22;

    

  return (

    // i want that if the age is above 18 then he will be able to submit the form

    <form>
        {age >= 18 ? (
        <div>
            <input type="email" placeholder='Enter the email' name="" id="" />
            <button onClick={handleRegFnc} >Submit </button>
        </div>
        ) : <div>
                <h1>You are a kid, go and watch pogo</h1>
            </div> }


    </form>
  )
}

export default Register
