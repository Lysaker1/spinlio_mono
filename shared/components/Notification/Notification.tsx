import { Notification as MantineNotification } from "@mantine/core";
import { IconCheck, IconInfoCircle, IconX } from "@tabler/icons-react";

export interface NotificationProps {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  onClose?: () => void;
}

function Notification({ type, title, message, onClose }: NotificationProps) {
  const icon = type === 'success' ? <IconCheck /> : type === 'error' ? <IconX /> : <IconInfoCircle />;
  const color = type === 'success' ? 'teal' : type === 'error' ? 'red' : 'blue';

  return (
    <MantineNotification title={title} color={color} icon={icon} onClose={onClose}>
      {message}
    </MantineNotification>
  )
}

export default Notification;
