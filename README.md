# react-confirm-modal
"Une bibliothèque React simple et flexible pour créer des modales de confirmation interactives,

Installation
Utilisez npm pour installer ce package dans votre projet :

npm install react-confirm-modal

## Utilisation
import React from 'react';
import { Modal } from 'react-confirm-modal';

function App() {
  // Votre code React

  return (
    <div>
      {/* Autres éléments de votre application */}
      <Modal isOpen={true} handleClose={() => { /* Gérer la fermeture de la modale */ }}>
        {/* Contenu de votre modale de confirmation */}
      </Modal>
    </div>
  );
}

export default App;


## Personnalisation

Vous avez la possibilité de personnaliser l'apparence et le contenu de cette modale générique pour l'adapter à vos besoins spécifiques. Voici ce que vous pouvez personnaliser :

- `customText` (optionnel) : Vous pouvez spécifier un texte personnalisé qui sera affiché dans la modale. Par défaut, il affiche "Action confirmée".
- `customStyles` (optionnel) : Vous pouvez fournir des styles CSS personnalisés pour personnaliser l'apparence de la modale. Notez que cette option est prévue pour des personnalisations futures et n'est pas utilisée dans la version actuelle du composant.

## Licence

Non spécifiée
