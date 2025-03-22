import React from 'react';
import styled from '@emotion/styled';

export interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  onClose?: () => void;
}

const NotificationContainer = styled.div<{ type: string }>`
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#e9f7ef';
      case 'error':
        return '#fdedec';
      case 'warning':
        return '#fef9e7';
      case 'info':
      default:
        return '#eaf2f8';
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#27ae60';
      case 'error':
        return '#e74c3c';
      case 'warning':
        return '#f39c12';
      case 'info':
      default:
        return '#3498db';
    }
  }};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: inherit;
  padding: 0;
  margin-left: 12px;
`;

export const Notification: React.FC<NotificationProps> = ({
  type = 'info',
  message,
  onClose,
}) => {
  return (
    <NotificationContainer type={type}>
      <div>{message}</div>
      {onClose && (
        <CloseButton onClick={onClose}>×</CloseButton>
      )}
    </NotificationContainer>
  );
};

export default Notification; 