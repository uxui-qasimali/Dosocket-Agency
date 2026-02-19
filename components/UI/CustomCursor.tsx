import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => document.body.classList.add('cursor-clicked');
    const handleMouseUp = () => document.body.classList.remove('cursor-clicked');

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      <style>{`
        body {
          cursor: none;
        }
        a, button, input, textarea, select, .cursor-pointer {
          cursor: none;
        }
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: #A4FEEB; /* dosocket-accent */
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border: 1px solid #A4FEEB;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          mix-blend-mode: difference;
        }
        body.cursor-clicked .cursor-ring {
          transform: scale(0.8) !important;
          background-color: rgba(164, 254, 235, 0.2);
        }
      `}</style>
      <motion.div
        className="cursor-ring hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <div 
        className="cursor-dot hidden md:block"
        ref={(ref) => {
          if (ref) {
            const updateDot = (e: MouseEvent) => {
              ref.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            };
            window.addEventListener('mousemove', updateDot);
          }
        }}
      />
    </>
  );
};

export default CustomCursor;
