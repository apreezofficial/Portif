import React from 'react'
import './style.css'
function Alink({text, link}) {
   return (
    <a href={link}>{text}</a>
   )
}
export default function Navbar(){
    return (
<>
<div className="navbar">
    <a href="#home" className='logotext'>Precious! ⚡</a>
    <a href="github.com" className='git'><i class="fab fa-github"></i>github</a>
</div>
</>
    );
}