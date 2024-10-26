import React, { useState } from 'react';
import { Container, Text, TextInput, Button } from '@mantine/core';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <Container size="xl" className="footer-content">
        <Text className="footer-text">
          © 2024 Spinlio. All Rights Reserved.
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
