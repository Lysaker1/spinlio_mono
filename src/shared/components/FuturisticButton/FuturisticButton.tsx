import styled from 'styled-components';

export const FuturisticButton = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(56, 189, 248, 0.5);
  border-radius: 8px;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      45deg,
      #00ffff,
      #ff00ff,
      #00ffff
    );
    z-index: -1;
    border-radius: 10px;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(56, 189, 248, 0.1),
      rgba(168, 85, 247, 0.1)
    );
    border-radius: 8px;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: transparent;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`; 