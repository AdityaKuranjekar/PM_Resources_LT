"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null };
    
    // Antigravity Brand Colors
    const colors = ['#1A73E8', '#8E24AA', '#E65100', '#E53935'];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // 1 to 3 px wide
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.density = (Math.random() * 30) + 1;
        
        // Base drift velocity
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      
      draw() {
        ctx.beginPath();
        // Dashed look: we draw a short line relative to velocity
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.vx * 15, this.y + this.vy * 15);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      
      update() {
        // Natural drift
        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around screen edges smoothly
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Subtle Mouse Repulsion & Parallax
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          
          const maxDistance = 150; // Interaction radius
          let force = (maxDistance - distance) / maxDistance;
          
          if (distance < maxDistance) {
            let directionX = (forceDirectionX * force * this.density) * 0.6;
            let directionY = (forceDirectionY * force * this.density) * 0.6;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }
        
        this.draw();
      }
    }
    
    const init = () => {
      particles = [];
      // Calculate amount based on screen size but capped
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 180);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Expert Resources in Product Management.</h1>
        <p className={styles.subtitle}>~ By Aditya Kailash Kuranjekar | Credit to - <a href="https://www.linkedin.com/in/jainvik/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Vikrant Jain</a> (Product Head at Stock Edge)</p>
      </div>
    </section>
  );
};

export default Hero;
