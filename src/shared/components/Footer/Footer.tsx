import React, { useEffect } from 'react';
import { Container, Text } from '@mantine/core';
import './Footer.css';

const Footer: React.FC = () => {
  useEffect(() => {
    // Load Klaviyo script with your company ID
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