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

  return (
    <>
      {/* Invisible trigger element at the top */}
      <div ref={triggerRef} style={{ position: 'absolute', top: '100px', height: '1px' }} />
      
      <footer style={style} className={`footer ${isVisible ? 'visible' : ''}`}>
        <Container size="xl" className="footer-content">
          <Text className="footer-text">
            © NeuralHub Limited
          </Text>
        </Container>
      </footer>
    </>
  );
};

export default Footer;