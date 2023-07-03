import React from 'react'
import tablet from '../assets/tablet.png'

const HeadContent = () => {
  return (
    <div className=' w-screen h-[100%] flex flex-row justify-around align-middle items-center'>
        <div className=' w-[20%] h-[70%] bg-transparent flex flex-col items-start'>
                <p className=' text-white text-xs font-semibold'>INSPIRATION TECHNOLOGY</p>
                <h1 className=' font-bold text-2xl text-white'>Runs faster</h1>
                <h2 className=' text-lg text-white'>Costs less and</h2>
                <h2 className=' text-lg text-white pb-5'>never break</h2>
       
            <div className=' w-full h-[1px] bg-white'></div>
            <h6 className=' text-white font-medium text-[12px] text-left pt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, assumenda?
            </h6>
            <div className=' w-full flex flex-row gap-6 mt-5'>
                <button className=' w-16 h-6 bg-[orange] font-medium text-[10px] text-[white]'>
                    Get started
                </button>
                <button className=' w-16 h-6 bg-transparent border-[white] border-2 font-medium text-[10px] text-[white]'>
                    Free trial
                </button>
            </div>
        </div>
        <img className=' w-[30%] h-[80%]' src={tablet} alt="" />
    </div>

  )
}

export default HeadContent