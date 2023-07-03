import React from 'react'
import fedex from '../assets/fedxx.png'
import google from '../assets/google.png'
import ola from '../assets/ola.png'
import micro from '../assets/micro.png'


const ImageList = () => {
  return (
    <div className=' w-full h-20 flex flex-col bg-slate-400'>
        <div className=' '>
            <img src={fedex} alt="" />
            <img src={google} alt="" />
            <img src={ola} alt="" />
            <img src={micro} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default ImageList
