import "../../src/index.css";
import React from 'react'


const Hero = () => {
  return (
    <div className="h-screen px-5 py-20 text-right text-white bg-purple-800 secHero">
      <br/><br/><br/>
      <h1 className="z-20 text-5xl font-bold md:letters">Unleash the Party Beast</h1>
      <p className="z-20 mt-4 text-xl md:letters">Get ready for the wildest party experience of your life!</p>
      <button className="z-20 px-4 py-2 mt-8 font-bold text-purple-500 bg-white rounded-lg shadow-md hover:bg-purple-100 letters button" >
        Explore Now
      </button>
    </div>
  )
}
export default Hero