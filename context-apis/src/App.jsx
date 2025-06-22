import { useContext } from 'react'
import Nav from './components/Nav'
import { ThemeContext } from './context/Theme'
const App = () => {
  const [theme,setTheme]=useContext(ThemeContext)
  return (
    <div className={`${theme == 0 ?'bg-[#e8e0d3]':'bg-black'} h-screen w-screen transition-all duration-500` }>
      <Nav/>
      <div className={`text-[12vw] md:text-[10vw]  ` }>
        <h1 className={`flex h-56 tracking-wider items-center gap-2 justify-center font-two object-center ${theme == 0 ?'text-black':'text-white '}`} >TECHN<img className= 'h-[10vw] w-[10vw] md:h-28 md:w-28 rounded-full object-cover block object-center ' src="https://i.pinimg.com/736x/0b/79/11/0b79112f66d8893d32e9958c6ef285dd.jpg " alt="" />L<img className='h-[10vw] w-[10vw] md:h-28 md:w-28 rounded-full object-cover block ' src="https://i.pinimg.com/736x/73/58/b8/7358b88c168f696d8912e708cc183559.jpg" alt="" />GY</h1>
      </div>
      <div className={` w-full h-[20%] fixed bottom-0 ${theme == 0 ?'bg-black text-white/70':'bg-[#c8b6ff] text-black'} transition-all duration-500`}>
          <img className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] md:h-[35rem] ' src="/images/home.png" alt="" />
          <h1 className=' absolute right-10 top-30 md:top-20 text-[0.5rem] md:text-[1rem] font-one'>Developed by Saurabh </h1>
      </div>
    </div>
  )
}

export default App