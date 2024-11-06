import React from 'react';
import { Title, Text, Stack } from '@mantine/core';
import '../../../shared/styles/CommonPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="common-page">
      <div className="common-content">
        <Stack justify ="center" align="center" style={{ width: '100%' }}>
          <Title>About us</Title>
          <Text size="lg" style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            Spinlio is a 3D design tool that makes it easy to create physical products. We are bridging the gap between designers and producers, by providing the tools to
            turn your ideas into production-ready products.
          </Text>
          <Text size="lg" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>


            We are an early-stage startup, currently focused on the bicycle industry, with
            ambitions to expand into all industries. While we're in Beta, we'll be continuously
            rolling out updates to improve your experience. Leave your email if you want to be
            part of the ride!
          </Text>
          
          <div className="klaviyo-form-container" style={{ marginTop: '2rem' }}>
            <div className="klaviyo-form-RqHT8c"></div>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default AboutPage;
