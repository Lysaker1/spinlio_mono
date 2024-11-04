import React, { useState, useEffect } from 'react';
import { Container, Text, TextInput, Button } from '@mantine/core';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Show footer when close to bottom (within 20px)
      const isBottom = windowHeight + scrollTop >= documentHeight - 20;
      setIsVisible(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  if (!isVisible) return null;

  return (
    <footer className="footer">
      <Container size="xl" className="footer-content">
        <Text className="footer-text">
          © NeuralHub Limited
        </Text>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <TextInput
            placeholder="Sign up for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            type="email"
            required
          />
          <Button type="submit" className="newsletter-button">
            Subscribe
          </Button>
        </form>
      </Container>
    </footer>
  );
};

export default Footer;
