import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="flex items-center gap-8 py-4 justify-center text-xl">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='service'>Service</NavLink>
        
        
    </div>
  )
}

export default Nav