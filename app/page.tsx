"use client";

import { useState, useEffect, useRef } from "react";
import HomeScreen from "@/components/home/home";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "#FFD700";
        ctx.fill();

        star.y += star.speed;

        // Reset star position after it moves out of view
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(drawStars);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStars();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${scrollPosition}px,)`,
        transition: "background 0.5s ease-in-out",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Canvas for star animations */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></canvas>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomeScreen />
      </div>
    </div>
  );
}
