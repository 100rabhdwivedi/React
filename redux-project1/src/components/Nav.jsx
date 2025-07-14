import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex gap-12 justify-center py-4 text-[1rem] font-semibold uppercase'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/products'>Products</NavLink>
        </div>
    )
}

export default Nav