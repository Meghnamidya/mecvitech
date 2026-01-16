import React, { useEffect, useState } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1050,
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        backgroundColor: '#007bff',
        color: '#fff',
        boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        WebkitTextStroke: '0.5px white',
        textShadow: '0 0 1px white, 0 0 1px white',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 22px rgba(0,0,0,0.25)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
      }}
    >
      <span className="backtotop-arrow" style={{display: 'inline-block'}}>
        ↑
      </span>
      <style>{`
        @media (max-width: 576px) {
          .backtotop-arrow {
            font-size: 16px !important;
          }
        }
      `}</style>
    </button>
  );
}

export default BackToTop;
