import "../../src/index.css";
import React from 'react'


const About = () => {
  return (
    <div className="h-screen px-5 py-10 text-left bg-slate-400 secAbout">
      <br/><br/><br/>
      <h2 className="z-20 text-5xl font-bold text-purple-800 md:letters2">About Us</h2>
      <p className="z-20 mt-4 text-lg text-purple-500 md:letters2">At Party Supplies, we are passionate about creating unforgettable moments through our party supplies. <br/> We offer a wide range of high-quality products to make your parties the talk of the town.</p>
      <button className="z-20 px-4 py-2 mt-8 font-bold text-white bg-purple-800 rounded-lg shadow-md hover:bg-purple-400 button letters2" >
        Learn More
      </button>
    </div>
  )
}
export default About
