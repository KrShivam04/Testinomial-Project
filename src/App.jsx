import { useState } from 'react'
import reviews from './data'
import './App.css'
import Testinomial from './component/Testinomial'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>

        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mb-10 m-auto'>
          {/* Underline class */}
        </div>

        <Testinomial reviews={reviews}/>

      </div>

    </div>

  )
}

export default App