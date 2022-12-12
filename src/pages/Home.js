import React from 'react'
import "./Home.css"
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"

const Home = () => {
  return (
    <div className="home">
      <div className='homepage'>
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  )
}

export default Home