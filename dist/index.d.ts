import React from 'react';
/**
 * Composant Modal génrérique
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modale est ouverte.
 * @param {function} props.handleClose - Fonction callback pour gérer la fermeture de la modale
 * @param {string} [props.customText] - Texte personnalisés à afficher dans la modale (facultatif)
 * @param {Object} [props.customStyles] - Style personnalisé pour la modale (facultatif)
 * @returns {JSX.Element} - Element React représentant la modale générique
 */
type ModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    customText?: string;
    customStyles?: React.CSSProperties;
};
export declare const Modal: React.FC<ModalProps>;
export {};
