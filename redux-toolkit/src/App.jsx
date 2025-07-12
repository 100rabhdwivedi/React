import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementAsync } from './store/reducers/counterReducer'
const App = () => {
  const count = useSelector((state) => state.counterReducer.value)
  const dispatch = useDispatch()
  return (
    <div className='h-screen w-screen bg-gray-800 flex justify-center items-center '>
      <div className='bg-gradient-to-r from-violet-200 to-blue-300 h-[30rem] w-[80%] text-white text-center'>
        <h1 className='mt-10 text-4xl font-bold'>Count : {count}  </h1>
        <div className='flex mt-10 gap-8 justify-center'>
          <button onClick={() => dispatch(increment())} className='px-4 py-1 bg-transparent border-2 border-white transition duration-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 '>Increment</button>
          <button onClick={() => dispatch(decrement())} className='px-4 py-1 bg-transparent border-2 border-white transition duration-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300'>Decrement</button>
          <button onClick={() => dispatch(incrementAsync(5))} className='px-4 py-1 bg-transparent border-2 border-white transition duration-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300'>Increment 5</button>
        </div>
      </div>
    </div>
  )
}

export default App
