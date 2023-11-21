import React from 'react';

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  customText?: string;
  globalStyles?: React.CSSProperties; // Styles pour la div globale
  containerStyles?: React.CSSProperties; // Styles pour la div container du message H2 et du bouton
  h2Styles?: React.CSSProperties; // Styles pour le h2
  buttonStyles?: React.CSSProperties; // Styles pour le bouton
  customStyles?: {
    containerStyles?: React.CSSProperties;
    buttonStyles?: React.CSSProperties; 
  };
};

export const MaModale: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  customText,
  globalStyles,
  containerStyles,
  h2Styles: h2StylesProp,
  buttonStyles: buttonStylesProp,
  customStyles,
}) => {
  const customTextValue = customText || 'Action confirmée';

  const modalStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.7)',
    ...globalStyles, // Styles pour la div globale
  };

  const containerTextModalStyles: React.CSSProperties = {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '400px',
    padding: '1rem',
    textAlign: 'center',
    ...containerStyles, // Styles pour la div container du message H2 et du bouton
    ...customStyles?.containerStyles, // Styles personnalisés s'ils sont fournis
  };

  const h2Styles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    ...h2StylesProp,
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'green',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    ...buttonStylesProp, // Utiliser le nouveau nom
    ...customStyles?.buttonStyles, // Styles personnalisés s'ils sont fournis
  };

  return (
    <div style={{ ...modalStyles, ...globalStyles }}>
      <div style={{ ...containerTextModalStyles, ...containerStyles }}>
        <h2 style={{ ...h2Styles }}>{customTextValue}</h2>
        <button style={{ ...buttonStyles }} onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
};
