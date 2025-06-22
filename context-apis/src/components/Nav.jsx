    import {Link} from 'react-router-dom'
    import { FaCircle } from "react-icons/fa";
    import { useContext } from 'react';
    import { ThemeContext } from '../context/Theme';
    useContext
    const Nav = () => {
        const [theme,setTheme]=useContext(ThemeContext)
        const handleClick = () => {
        setTheme(prev => prev === 0 ? 1 : 0);
        };
        return (
        <div className={`h-22 w-full  flex justify-between items-center px-2 md:px-8 ${theme == 0 ?'text-black':'text-white '} transition-all duration-500` }>
            <div className="h-[15vw] md:h-32 md:w-24 ">
                <img className="h-full" src={`/images/${theme == 0 ? 'logo.png' :'logo2.png'}`} alt="" />
            </div>
            <div className='flex gap-3 sm:gap-6 md:gap-12 font-one text-[0.7rem] sm:text-[2.2vw] md:text-[1.1rem]'>
                <Link>Home</Link>
                <Link>Gallary</Link>
                <Link>Collections</Link>
                <Link>Pricing</Link>
            </div>
            <div onClick={handleClick} className={`h-6 md:h-8 cursor-pointer w-10 md:w-12 flex items-center ${theme == 0 ?'bg-orange-600/80 text-[#e8e0d3]  justify-start':'bg-[#c8b6ff] text-black justify-end '} rounded-full text-md md:text-xl transition-all duration-500`}>
                < FaCircle className='m-1' />
            </div>
        </div>
        )
    }

    export default Nav