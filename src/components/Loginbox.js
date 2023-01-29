import React from "react"

const Loginbox = () => {
  return (
    <div className='login'>
        <h3>Log In</h3>
        <form>
            <label htmlFor='username'>Username:</label><br />
            <input type='text' id='username' /> <br />
            <label htmlFor='password'>Password:</label> <br />
            <input type='password' id='password' /><br />
            <button>Log In</button>
        </form>
       
    </div>
  )
}

export default Loginbox