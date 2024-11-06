import React, { useEffect, useState } from 'react';
import { Container, Text } from '@mantine/core';
import './Footer.css';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load Klaviyo script with your actual company ID
    const script = document.createElement('script');
    script.src = '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=WnKLxt';  // Replace with your actual ID
    script.async = true;
    document.body.appendChild(script);

    // Remove the scroll visibility logic
    setIsVisible(true);  // Always show footer

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="footer">
      <Container size="xl" className="footer-content">
        <Text className="footer-text">
          © NeuralHub Limited
        </Text>
        
        <div className="newsletter-container">
          <div className="klaviyo-form-RqHT8c"></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
