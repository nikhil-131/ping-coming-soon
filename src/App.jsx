import { useState } from 'react'
import './App.css'
import logo from "./assets/images/logo.svg"
import dash from "./assets/images/dash.png"
import fb from "./assets/images/fb.svg"
import twitter from "./assets/images/twitter.svg"
import insta from "./assets/images/insta.svg"

function App() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(null)

  const handleChange = (event) => {
    setEmail(event.target.value)
    console.log(email)
    if(errorMsg === true) {
      setErrorMsg(false)
    }
  }

  const handleClick = (event) => {
    let pattern = /\b[a-z0-9.+-/]+@[a-z0-9.]+\.[a-z]{2,}\b/
    console.log(event.target)
    let result = pattern.test(email)
    setErrorMsg(!result);
  }

  return (
    <>
      <div className="container flex flex-col justify-center items-center md:w-[80%] w-[80%] mx-auto md:mx-auto">
        <div className="logo my-6">
          <a href="#"><img src={logo} alt="logo" /></a>
        </div>
        <div className="launching">
          <h1 className='text-gray-500 text-2xl md:text-5xl font-extralight mb-4 text-center'>We are launching <span className='text-black font-bold'>soon!</span></h1>
          <p className='text-base md:text-lg text-center'>Subscribe and get notified</p>
        </div>
        <div className="email w-[90%] max-w-full my-5 flex md:flex-row flex-col justify-center md:gap-6 gap-3">
          <div className="input">
            <label htmlFor="email"><input onChange={handleChange} className={`border-2 border-solid py-3 px-5 rounded-full md:w-[400px] w-[90%] outline-none ${errorMsg?'outline-red-500 outline-offset-0':'focus:border-blue-400'}`} type="email" name="email" id="email" placeholder='Your email address...' /></label>
            {errorMsg &&
              <p className='text-sm px-6 text-red-600'>Please provide a valid email address</p>
            }
          </div>
          <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-400 px-6 rounded-full text-white font-semibold md:w-[170px] w-[90%] max-w-full h-[51.2px]' type="submit">Notify Me</button>
        </div>
        <div className="dash flex justify-center items-center">
          <img className='w-[545px]' src={dash} alt="" />
        </div>
        <div className="footer absolute bottom-0">
          <div className="follow flex gap-6 justify-center">
            <div className="fb">
              <img className='p-1.5 border rounded-full hover:cursor-pointer hover:border-blue-400' src={fb} alt="facebook icon" />
            </div>
            <div className="twitter">
              <img className='p-1.5 border rounded-full hover:cursor-pointer hover:border-blue-400' src={twitter} alt="twitter icon" />
            </div>
            <div className="insta">
              <img className='p-1.5 border rounded-full hover:cursor-pointer hover:border-blue-400' src={insta} alt="instagram icon" />
            </div>
          </div>
          <p className='text-sm py-5 text-gray-400 text-center'>&copy; Copyright Ping. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default App
