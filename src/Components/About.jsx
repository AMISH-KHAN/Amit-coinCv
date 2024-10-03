import React from 'react'

export default function About() {
  return (
    <>
          <section id='about' className='py-[70px] w-full '>
              <div className='xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[540px] mx-auto relative  z-20 m-auto flex lg:flex-row flex-col'>
                  <div className=' font-display lg:w-5/12 w-full px-4 lg:pr-4'>
                      <h1 className='text-[40px] lg:text-[54px] font-[850] text-white'>About our <br /> <span className='text-[#7ec273]'>Earning Platform</span></h1>
                      <p className='mt-4 text-[17px] font-normal text-white'>CVTrade is a platform designed to empower you in the exciting realm of cryptocurrencies.</p>
                      <div className='mt-12'>
                          <div className=' border-l-2 border-[#7ec273] pl-[10px] mb-4'>
                              <p className='text-white text-[16px] font-medium '>Refreaal : Stay informed with real-time market data and insights.</p>
                          </div>
                          <div className=' border-l-2 border-[#7ec273] pl-[10px] mb-4'>
                              <p className='text-white text-[16px] font-medium '>Airdrop : Explore various trading possibilities replace with a more generic term if specific trading options aren't mentioned on your website</p>
                          </div>
                          <div className=' border-l-2 border-[#7ec273] pl-[10px] mb-4'>
                              <p className='text-white text-[16px] font-medium '>Security Focus : If security is mentioned on your website Rest assured, security is a top priority at CVTrade.io..</p>
                          </div>
                      </div>
                  </div>
                  <div className=' w-full flex px-4  lg:w-7/12'>
                      <img src="./assets/asset 9.png" className='w-full' alt="" />
                      
                  </div>
              </div>
      </section>
    </>
  )
}
