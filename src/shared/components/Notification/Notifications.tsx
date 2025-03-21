import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Notification as MantineNotification } from "@mantine/core";
import { IconCheck, IconInfoCircle, IconX } from "@tabler/icons-react";

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

interface NotificationsProps {
  notifications: Notification[];
  onClose: (id: string) => void;
}

const NotificationsContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
`;

const NotificationItem = styled.div<{ type: Notification['type'] }>`
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success': return '#4caf50';
      case 'error': return '#f44336';
      case 'warning': return '#ff9800';
      case 'info':
      default: return '#2196f3';
    }
  }};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-left: 8px;
  padding: 0;
`;

const Notifications: React.FC<NotificationsProps> = ({ notifications, onClose }) => {
  // Setup auto-close for notifications with duration
  useEffect(() => {
    notifications.forEach(notification => {
      if (notification.duration) {
        const timer = setTimeout(() => {
          onClose(notification.id);
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, onClose]);

  return (
    <NotificationsContainer>
      {notifications.map(notification => (
        <NotificationItem key={notification.id} type={notification.type}>
          <div>{notification.message}</div>
          <CloseButton onClick={() => onClose(notification.id)}>×</CloseButton>
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
};

export default Notifications;