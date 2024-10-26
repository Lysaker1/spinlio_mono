import React, { useEffect } from 'react';
import { Title, Text, Container } from '@mantine/core';
import '../../../shared/styles/CommonPage.css';  // Updated import path

declare global {
  interface Window {
    hbspt: any;
  }
}

const ContactUsPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "47840965",
          formId: "131d4fe9-52f6-45e1-adc9-3a112f6f345e",
          target: '#hubspotForm'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="common-page">
      <Container className="common-content">
        <Title order={1}>Contact Us</Title>
        <Text mb="xl">
          Get in touch with us for any inquiries or feedback.
        </Text>
        <div id="hubspotForm"></div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
