import React from 'react';
import './style.css'
export default function Page() {
    return(
 <>

<section class="container">
<div class="content">
<h1><span>Creative</span> Software Engineer.</h1>
<p>I like to craft solid and scalable products with great user experiences.</p>
<p>I'm Robinson Honour, with 6+ Years of experience. Started coding in 2017, specializing in web development, app development, robotics, cloud computing, and game development.</p>
<p>Self-taught programmer with proven experience in building live projects. Active tech content creator and speaker.</p>
<div class="social-icons">
<a href="#"><i class="fab fa-facebook"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-linkedin"></i></a>
</div>
</div>
<div class="profile-pic">
<img src="IMG20250119114728.jpg" alt="Profile" />
</div>
</section>

<section class="services">
<h2>Services <span>🔥</span></h2>
<div class="underline"></div>
<p>Specialized in multiple domains of software and hardware engineering</p>

<div class="services-container">
<div class="service-card">
<i class="fas fa-code"></i>
<h3>Frontend Development</h3>
<p>Crafting responsive and interactive web applications using React, Next.js, and TypeScript. Focusing on modern UI/UX practices and optimal performance.</p>
</div>

<div class="service-card">
<i class="fas fa-server"></i>
<h3>Backend Development</h3>
<p>Building robust server-side applications and APIs using Node.js, Python, and database technologies. Ensuring scalability and security.</p>
</div>

<div class="service-card">
<i class="fas fa-mobile-alt"></i>
<h3>App Development</h3>
<p>Developing cross-platform mobile applications and desktop software solutions that deliver seamless user experiences across different devices.</p>
</div>

<div class="service-card">
<i class="fas fa-robot"></i>
<h3>Robotics Engineering</h3>
<p>Creating and programming robotic systems, specializing in automation and control systems.</p>
</div>

<div class="service-card">
<i class="fas fa-paint-brush"></i>
<h3>UI Design</h3>
<p>Crafting intuitive and visually appealing user interfaces with a focus on user-centered design principles and modern design trends.</p>
</div>

<div class="service-card">
<i class="fas fa-cloud"></i>
<h3>Cloud Computing</h3>
<p>Implementing and managing cloud solutions, leveraging services for scalable and efficient application deployment and infrastructure management.</p>
</div>
</div>
</section>

<section class="projects">
<h2>Projects</h2>
<div class="underline">g</div>
<div class="projects-container">
<div class="project-card">
<div class="project-header">
<h3>Wolow</h3>
<a href="#"><i class="fas fa-external-link-alt"></i></a>
</div>
<p>Wolow is a Wake-on-LAN app that remotely powers on computers and provides features like status checks, shutdown, reboot, sleep, and lock.</p>
<div class="project-icons">
<i class="fab fa-aws"></i>
<i class="fab fa-vuejs"></i>
<i class="fas fa-wave-square"></i>
<i class="fas fa-mountain"></i>
<i class="fab fa-v"></i>
</div>
</div>
</div>
</section>
</>
    )
} 