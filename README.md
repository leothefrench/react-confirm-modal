# react-confirm-modal
Une bibliothèque React simple et flexible pour créer des modales de confirmation interactives stylisable

## Installation
Utilisez npm pour installer ce package dans votre projet :

npm install react-confirm-modal-v1

## Utilisation
```jsx
import React, { useState } from 'react';
import { MaModale } from 'react-confirm-modal-v1';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fonction pour gérer la fermeture de la modale
  const handleClose = () => {
    setModalIsOpen(false);
  };

  // Fonction pour ouvrir la modale
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      {/* Autres éléments de votre application */}

      <button onClick={handleOpenModal}>Ouvrir la modale</button>

      <MaModale
        isOpen={modalIsOpen}
        handleClose={handleClose}
        customText="Message de confirmation"
        customStyles={{
          globalStyles: {
            // Styles pour la div globale
          },
          containerStyles: {
            // Styles pour la div container du message H2 et du bouton
            backgroundColor: 'gold',
            borderRadius: '10px', // Coins arrondis
          },
          h2Styles: {
            // Styles pour le h2
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          },
          buttonStyles: {
            // Styles pour le bouton
            backgroundColor: 'green',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
          },
        }}
      >
        {/*
          Contenu de votre modale de confirmation
          Vous pouvez personnaliser le texte affiché ici en utilisant la propriété `customText` et `customStyles`

          `customStyles` (optionnel): Vous pouvez fournir un objet contenant des styles CSS personnalisés pour personnaliser l'apparence de la modale
        */}
        <p>Votre texte</p>
      </MaModale>
    </div>
  );
}

export default App;

```

## Personnalisation

Vous avez la possibilité de personnaliser l'apparence et le contenu de la modale générique pour l'adapter à vos besoins spécifiques. Voici les options de personnalisation disponibles :

customText (optionnel) : Vous pouvez spécifier un texte personnalisé qui sera affiché dans la modale. Par défaut, il affiche "Action confirmée".

customStyles (optionnel) : Vous pouvez fournir des styles CSS personnalisés pour personnaliser l'apparence de la modale. Les options de personnalisation comprennent :

globalStyles : Styles pour la div globale englobant la modale.

containerStyles : Styles pour la div contenant le message H2 et le bouton. Vous pouvez personnaliser des propriétés telles que la couleur de fond et les coins arrondis.

h2Styles : Styles pour le titre H2. Vous pouvez ajuster la taille de la police, le poids de la police, etc.

buttonStyles : Styles pour le bouton de fermeture. Vous pouvez personnaliser la couleur de fond, la couleur du texte, la bordure, etc.

## Licence

Non spécifiée
