import { Modal } from '@mantine/core';
import { useAuth0 } from '@auth0/auth0-react';

const LoginModal = ({ opened, setOpened }: { opened: boolean, setOpened: (opened: boolean) => void }) => {
  const { loginWithRedirect } = useAuth0();
  
  const handleLogin = async () => {
    // Get the stored redirect path or use default
    const redirectPath = localStorage.getItem('redirectPath') || '/designs';
    
    // Close the modal
    setOpened(false);
    
    // Redirect to login with the stored redirect path
    await loginWithRedirect({
      appState: { returnTo: redirectPath }
    });
  };
  
  return (
    <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false} className="rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Bazaar</h2>
      <p className="text-xl mb-4 text-center">Please log in to continue!</p>
      <button 
        className="bg-black text-white py-2 px-4 rounded-full w-full" 
        onClick={handleLogin}
      >
        Log in
      </button>
    </Modal>
  );
};

export default LoginModal; 