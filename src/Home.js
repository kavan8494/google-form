import React from 'react'
import {Link, link} from "react-router-dom"

function Home() {
  return (
    <div>
        <Link to={"/signup"}>
        <button type="submit">signup</button>
        </Link>
        <Link to={ "/login"}>
        <button type="submit">login</button>
        </Link>
    </div>
  )
}

export default Home
