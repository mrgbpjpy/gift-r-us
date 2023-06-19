import "./index.css"
import React,{useLayoutEffect} from 'react'
import Main from './component/main'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import BuyNow from './component/BuyNow'



function App() {
  
  
  return (
    <>
     <section className='fixed top-0 z-10 w-[98vw] h-screen secFirst' >
       <Main />
      </section> 
      <section className="secHeader" >
      <Header />
      </section>
      <section >
      <Hero />
      </section>
      <section >
      <About />
      </section>
      <section >
      <BuyNow/>
      </section>

    </>
  )
}

export default App
