import React,{useState} from 'react'

export default function Test() {
    const [but,setBut]=useState("")
    
    function handleClick(){
        console.log("Button Clicked")
        setBut("none")
    }

  return (
    <div>
      <button style={{display:but}} onClick={handleClick}>Hide Me</button>
    </div>
  )
}
