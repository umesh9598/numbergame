import React, {useState} from 'react'

const Number = () => {
    
    const [curNum, setCurNum] = useState(0)



  return (
        <div className='text-white  my-36 flex flex-col  items-center font-Popins '>
      <div >
        <h1 className='border border-1 border-white py-5 px-10 mb-3  text-9xl font-bold rounded-sm' >{curNum}</h1>
      </div>
      <div>
        <button className='mx-3 py-1 px-2  mt-3 border border-1 border-white hover:bg-white hover:text-black rounded-md font-medium ' onClick={()=>setCurNum(curNum + 1)}>Increament</button>
        <button className='mx-3 py-1 px-2  mt-3 border border-1 border-white hover:bg-white hover:text-black rounded-md font-medium' onClick={()=> curNum>0 ?setCurNum(curNum -1): setCurNum(0)}>Decrement</button>
        <button className='mx-3 py-1 px-2  mt-3 border border-1 border-white hover:bg-white hover:text-black rounded-md font-medium' onClick={()=> setCurNum(0)}>Clear</button>
      </div>
    </div>
    
  )
}

export default Number
