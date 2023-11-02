"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importDefault(require("react"));
const Modal = ({ isOpen, handleClose, customText, customStyles }) => {
    const customTextValue = customText || 'Action confirmée';
    const modalStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.7)',
        // ...customStyles,
    };
    const containerTextModalStyles = {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '400px',
        padding: '1rem',
        textAlign: 'center',
    };
    const h2Styles = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    };
    const buttonStyles = {
        backgroundColor: 'green',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
    };
    return (react_1.default.createElement("div", { style: modalStyles },
        react_1.default.createElement("div", { style: containerTextModalStyles },
            react_1.default.createElement("h2", { style: h2Styles }, customTextValue),
            react_1.default.createElement("button", { style: buttonStyles, onClick: handleClose }, "X"))));
};
exports.Modal = Modal;
