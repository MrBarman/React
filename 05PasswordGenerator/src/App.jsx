import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [passwd, setPasswd] = useState("")

  // for taking reference of any object and manipulate it
  const passwdRef = useRef(null)

  // manipulating the object received using useRef
  const copyPasswordToClipboard = useCallback(() => {
      passwdRef.current?.select();
      passwdRef.current?.setSelectionRange(0, 8);
      window.navigator.clipboard.writeText(passwd)
  },[passwd])

  const passwdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*[]{}<>?/'.-_"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPasswd(pass)

  }, [length, numberAllowed, charAllowed, setPasswd])
  
  // to rerun on any depency change and right after the page loads
   useEffect(() => {
    passwdGenerator()
   },[
    length, numberAllowed, charAllowed, passwdGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 bg-gray-800 text-orange-500 rounded-lg'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounderd-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={passwd}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref = {passwdRef} 
          />
          <button className='outline-none bg-blue-600 text-white 
          px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={18}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="number-input"
              className='cursor-pointer'
              onChange={(e) => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="number-input"
              className='cursor-pointer'
              onChange={(e) => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
