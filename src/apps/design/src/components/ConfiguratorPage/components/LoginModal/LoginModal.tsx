import { Modal, Button, Text } from '@mantine/core';
import { useAuth0 } from '@auth0/auth0-react';

const LoginModal = ({ opened, setOpened }: { opened: boolean, setOpened: (opened: boolean) => void }) => {
  const { loginWithPopup } = useAuth0();
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false} className="rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Bazaar</h2>
        <p className="text-xl mb-4 text-center">Please log in to start customizing!</p>
        <button className="bg-black text-white py-2 px-4 rounded-full w-full" onClick={() => loginWithPopup()}>
          Log in
        </button>
      </Modal>
    </>
  );
};

export default LoginModal;