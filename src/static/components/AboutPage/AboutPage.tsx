import React from 'react';
import { Title, Text, Container, Stack } from '@mantine/core';
import '../../../shared/styles/CommonPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="common-page">
      <Container className="common-content">
        <Stack gap="xl">
          <Title order={1}>About us</Title>
          <Text ta="center">
            Spinlio is a 3D design tool that makes it easy to create physical products.
          </Text>
          <Text ta="center">
            Our platform bridges the gap between designers and producers, by providing the tools and environment that makes your ideas not only unique but also ready for production.
          </Text>
          <Text ta="center">
            We are an early-stage startup, currently focused on the bicycle industry, with ambitions to expand into all industries. 
            While we're in Beta, we'll be continuously rolling out updates daily to improve your experience so sign up for updates if you want to be part of the ride.
          </Text>
        </Stack>
      </Container>
    </div>
  );
};

export default AboutPage;
