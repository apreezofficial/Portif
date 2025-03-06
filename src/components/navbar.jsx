import React from 'react'
function Alink({text, link}) {
   return (
    <a href={link}>{text}</a>
   )
}
export default function Navbar(){
    return (
<>
<div className="nav">
    <Alink href="youtube.com" text="Home"/>
</div>
</>
    )
}