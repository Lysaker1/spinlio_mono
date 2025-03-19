import React, { useState } from 'react';
import { Modal, Button, Group, Text, Title, Paper, Card } from '@mantine/core';
import { IconPencil, IconBuildingStore } from '@tabler/icons-react';
import BusinessAccountForm from '../BusinessAccountForm';

interface UserRoleModalProps {
  isOpen: boolean;
  userId: string;
  onClose: () => void;
}

/**
 * Modal that prompts new users to choose their role: designer or supplier
 */
const UserRoleModal: React.FC<UserRoleModalProps> = ({ isOpen, userId, onClose }) => {
  const [showBusinessForm, setShowBusinessForm] = useState(false);
  
  const handleDesignerClick = () => {
    // Just close the modal if user just wants to browse/design
    onClose();
  };
  
  const handleSupplierClick = () => {
    // Show the business account form
    setShowBusinessForm(true);
  };
  
  const handleBusinessFormSuccess = () => {
    // Close the modal after business account is created
    onClose();
  };
  
  const handleBusinessFormCancel = () => {
    // Go back to role selection
    setShowBusinessForm(false);
  };
  
  return (
    <Modal 
      opened={isOpen} 
      onClose={onClose} 
      size="lg" 
      centered
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      {!showBusinessForm ? (
        <div className="flex flex-col gap-8">
          <Title order={2} ta="center" mt="md">Welcome to Bazaar!</Title>
          <Text ta="center" size="lg" mb="lg">
            What would you like to do next?
          </Text>
          
          <Group grow>
            <Card 
              p="lg" 
              radius="md" 
              withBorder
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={handleDesignerClick}
            >
              <Card.Section className="bg-gray-50 p-4 flex justify-center">
                <IconPencil size={48} stroke={1.5} className="text-blue-500" />
              </Card.Section>
              
              <Text fw={500} size="lg" mt="md" mb="xs" ta="center">
                Start Browsing & Designing
              </Text>
              
              <Text size="sm" c="dimmed" ta="center">
                Explore the marketplace and design your own custom bikes and components
              </Text>
              
              <Button 
                variant="light" 
                color="blue" 
                fullWidth 
                mt="md"
                onClick={handleDesignerClick}
              >
                Continue as Designer
              </Button>
            </Card>
            
            <Card 
              p="lg" 
              radius="md" 
              withBorder
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={handleSupplierClick}
            >
              <Card.Section className="bg-gray-50 p-4 flex justify-center">
                <IconBuildingStore size={48} stroke={1.5} className="text-green-500" />
              </Card.Section>
              
              <Text fw={500} size="lg" mt="md" mb="xs" ta="center">
                List My Products
              </Text>
              
              <Text size="sm" c="dimmed" ta="center">
                Create a business account to sell your products on the marketplace
              </Text>
              
              <Button 
                variant="light" 
                color="green" 
                fullWidth 
                mt="md"
                onClick={handleSupplierClick}
              >
                Continue as Supplier
              </Button>
            </Card>
          </Group>
          
          <Text size="sm" c="dimmed" ta="center" mt="md">
            You can always change your settings later in your profile.
          </Text>
        </div>
      ) : (
        <BusinessAccountForm 
          userId={userId}
          onSuccess={handleBusinessFormSuccess}
          onCancel={handleBusinessFormCancel}
        />
      )}
    </Modal>
  );
};

export default UserRoleModal; 