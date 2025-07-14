import React from 'react'
import Nav from './components/Nav'
import HomeRoutes from './routes/HomeRoutes'

const App = () => {
  return (
    <div className='bg-blue-200  h-screen w-screen'>
      <Nav/>
      <HomeRoutes/>
    </div>
  )
}

export default App