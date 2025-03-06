import { useEffect } from "react";
import "./style.css"; // Importing your main CSS file

const Globe = () => {
  useEffect(() => {
    const globe = document.querySelector(".globe");
    
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = (clientY - centerY) / 20;
      const rotateY = (clientX - centerX) / 20;

      globe.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" };
      document.querySelector(".time").textContent = new Date().toLocaleTimeString("en-US", options);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="globe-container">
      <h1>I'm very flexible with time zone communications</h1>
      <div className="globe"></div>
      <div className="location">
        <span className="icon">📍</span> Remote  
        <br />
        <strong>India - <span className="time"></span></strong>
      </div>
    </div>
  );
};

export default Globe ;