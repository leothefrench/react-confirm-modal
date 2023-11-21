import React from 'react';
type ModalProps = {
    isOpen: boolean;
    handleClose: () => void;
    customText?: string;
    globalStyles?: React.CSSProperties;
    containerStyles?: React.CSSProperties;
    h2Styles?: React.CSSProperties;
    buttonStyles?: React.CSSProperties;
    customStyles?: {
        containerStyles?: React.CSSProperties;
        buttonStyles?: React.CSSProperties;
    };
};
export declare const MaModale: React.FC<ModalProps>;
export {};
