"use client";
import React, { useState, useEffect, useRef } from "react";
import "./WelcomeAnimation.css";

const WelcomeAnimation = ({ onAnimationComplete }) => {
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    // Sequence timing for each text element
    const sequenceTimings = [
      { appear: 0, disappear: 1000 }, // Welcome
      { appear: 1500, disappear: 3500 }, // to
      { appear: 4000, disappear: 7000 }, // My Portfolio
    ];

    // Handle text sequence
    sequenceTimings.forEach((timing, index) => {
      const appearTimeout = setTimeout(() => {
        setCurrentText(index);
      }, timing.appear);

      const disappearTimeout = setTimeout(() => {
        if (index < sequenceTimings.length - 1) {
          setCurrentText(-1); // Show no text between transitions
        } else {
          handleCompletion(); // Complete after last text
        }
      }, timing.disappear);

      return () => {
        clearTimeout(appearTimeout);
        clearTimeout(disappearTimeout);
      };
    });
  }, []);

  const handleCompletion = () => {
    if (!hasCompletedRef.current) {
      hasCompletedRef.current = true;
      const container = containerRef.current;
      if (container) {
        container.classList.add("fade-out");
        setTimeout(onAnimationComplete, 1000);
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hasCompletedRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);

      setMousePosition({ x, y });

      // Update particle positions
      const particles = document.querySelectorAll(".particle");
      particles.forEach((particle) => {
        const speed = parseFloat(particle.dataset.speed) || Math.random() * 0.5;
        const deltaX = x * 100 * speed;
        const deltaY = y * 100 * speed;
        particle.style.transform = `translate3d(${deltaX}px, ${deltaY}px, ${
          Math.random() * 200
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const colors = ["#efb307", "#fccd4d", "#ffd700", "#ffdb78"];

    const createParticle = () => {
      if (hasCompletedRef.current) return;

      const particle = document.createElement("div");
      const size = 2 + Math.random() * 6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speed = Math.random() * 0.5;

      particle.classList.add("particle");
      particle.dataset.speed = speed;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        transform: `translateZ(${Math.random() * 500}px)`,
        opacity: 0.6 + Math.random() * 0.4,
      });

      container.appendChild(particle);
      setTimeout(() => particle.remove(), 8000);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 100);
    }

    const intervalId = setInterval(createParticle, 200);
    return () => clearInterval(intervalId);
  }, []);

  const getTextStyle = (baseTransform) => ({
    transform: `
      translate3d(
        ${mousePosition.x * -30}px,
        ${mousePosition.y * -30}px,
        ${baseTransform}px
      )`,
  });

  return (
    <div
      className="welcome-animation"
      ref={containerRef}
      style={{
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      }}
    >
      <div className="content-wrapper">
        <div
          className={`element welcome-text ${
            currentText === 0 ? "visible" : ""
          }`}
          style={getTextStyle(200)}
        >
          Welcome
        </div>
        <div
          className={`element to-text ${currentText === 1 ? "visible" : ""}`}
          style={getTextStyle(200)}
        >
          to
        </div>
        <div
          className={`element app-name ${currentText === 2 ? "visible" : ""}`}
          style={getTextStyle(200)}
        >
          My Portfolio
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
