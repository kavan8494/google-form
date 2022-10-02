import React from 'react'

function Login() {
  return (
    <div>
      <h1>login form</h1>
      <label for="name">USERNAME</label>
      <br/>
      <input type="text" />
      <br/>
      <label for="name">password</label>
      <br/>
      <input type="text" />
      <br/>
      <button type="submit" >login</button>
    </div>
  )
}

export default Login
