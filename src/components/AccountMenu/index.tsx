import React, { useRef, useState, useEffect } from "react";
import { Container } from "./styles";

const AccountMenu: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  
  const handleOpenMenuAccount = () => {
    setIsOpen(true);
    document.addEventListener("click", handleCloseMenuAccount);
    document.addEventListener("touchstart", handleCloseMenuAccount); 
  };

  const handleCloseMenuAccount = (e: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
      cleanupListeners();
    }
  };

  
  const cleanupListeners = () => {
    document.removeEventListener("click", handleCloseMenuAccount);
    document.removeEventListener("touchstart", handleCloseMenuAccount);
  };

  
  useEffect(() => {
    return () => {
      cleanupListeners();
    };
  }, []);

  return (
    <Container isOpen={isOpen} ref={ref}>
      <img
        onClick={handleOpenMenuAccount}
        src="/icon-my-account.svg"
        alt="My account"
      />
      {
        isOpen && (
            <div>
                <p>First Name: John</p>
                <p>Last Name: John</p>
                <p>Email: John@Test.com</p>
                
            </div>
        )
      }
    </Container>
  );
};

export default AccountMenu;
