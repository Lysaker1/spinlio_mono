import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate();
  
  return (
    <div className="checkout-result">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <button onClick={() => navigate('/')}>
        Return to Designer
      </button>
    </div>
  );
}; 