import React, { useEffect, useState, useRef } from 'react';
import { Container, Text } from '@mantine/core';
import './Footer.css';

interface FooterProps {
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({ style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show footer when trigger element is not visible (scrolled past)
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '100px',
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Klaviyo script loading
    const script = document.createElement('script');
    script.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UYRE7k';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Invisible trigger element at the top */}
      <div ref={triggerRef} style={{ position: 'absolute', top: '100px', height: '1px' }} />
      
      <footer style={style} className={`footer ${isVisible ? 'visible' : ''}`}>
        <Container size="xl" className="footer-content">
          <Text className="footer-text">
            © NeuralHub Limited
          </Text>
          
          <div className="newsletter-container">
            <div className="klaviyo-form-RqHT8c"></div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;