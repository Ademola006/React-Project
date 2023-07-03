import React from 'react'

const Nav = () => {
  return (
    <div className=' w-full h-10 bg-transparent flex flex-row justify-around items-center'>
       
            <h1 className=' font-extrabold text-xl text-white'>SELLZEE</h1>
            <ul className=' flex flex-row gap-5 text-sm font-bold text-white'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Testimonial</li>
                <li>Pricing</li>
            </ul>
            <button className=' w-32 h-8 bg-[orange] rounded-md font-medium text-sm text-[white]'>Get started</button>

    </div>
  )
}

export default Nav