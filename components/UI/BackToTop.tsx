import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <style>{`
          .back-btn {
            width: 140px;
            height: 56px;
            overflow: hidden;
            border: none;
            color: #041F1A;
            background: #A4FEEB;
            position: relative;
            padding-bottom: 0;
            cursor: pointer;
            border-radius: 9999px;
            box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          
          .back-btn:hover {
            box-shadow: 0 15px 25px -3px rgba(164, 254, 235, 0.4);
            transform: translateY(-2px);
          }

          .back-btn .content-wrapper {
             position: relative;
             width: 100%;
             height: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
          }
          
          .back-btn .text-container,
          .back-btn .clone-container {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          
          .back-btn:before {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 12px;
            left: 20%;
            width: 60%;
            transform: scaleX(0);
            transform-origin: bottom right;
            background: #041F1A;
            transition: transform 0.25s ease-out;
            z-index: 10;
          }
          
          .back-btn:hover:before {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
          
          .back-btn .text-wrapper {
             position: absolute;
             width: 100%;
             height: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
             padding-right: 20px; /* Space for arrow */
          }

          .back-btn .text span, .back-btn .clone span {
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
            display: inline-block;
          }
          
          .back-btn .text {
             position: absolute;
          }

          .back-btn .clone {
             position: absolute;
          }
          
          .back-btn .clone span {
            transform: translateY(60px);
            opacity: 0;
          }
          
          .back-btn:hover .clone span {
            opacity: 1;
            transform: translateY(0px);
          }
          
          .back-btn:hover .text span {
            opacity: 0;
            transform: translateY(-60px);
          }
          
          /* Stagger effect */
          .back-btn:hover .clone span:nth-child(1) { transition-delay: 0.05s; }
          .back-btn:hover .clone span:nth-child(2) { transition-delay: 0.1s; }
          .back-btn:hover .clone span:nth-child(3) { transition-delay: 0.15s; }
          
          .back-btn svg {
            width: 18px;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%) rotate(-45deg);
            transition: 0.3s ease-out;
          }
          
          .back-btn:hover svg {
            transform: translateY(-50%) rotate(-90deg);
          }
        `}</style>
      <button className="back-btn" onClick={scrollToTop}>
        <div className="text-wrapper">
          <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
        </div>
        <svg strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

export default BackToTop;