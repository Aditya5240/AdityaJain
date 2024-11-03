import React from 'react'
import TypingText from './TypingText'

const HomePage = () => {
  return (
    <>
    <div className="header-text">
        <div className="header-title">
          <p>I am ADITYA</p>
          <p>Jain ...</p>
          
          <p className='para'>
            <TypingText text="An aspiring WEB-developer working in web-dev from past one year."/>
          </p>
        </div>
        <div className="header-img">
        <img src="../src/assets/PngItem_1127587.png" alt=""/>
        </div>
    </div>
    </>
  )
}

export default HomePage