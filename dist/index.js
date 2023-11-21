"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaModale = void 0;
const react_1 = __importDefault(require("react"));
const MaModale = ({ isOpen, handleClose, customText, globalStyles, containerStyles, h2Styles: h2StylesProp, buttonStyles: buttonStylesProp, customStyles, }) => {
    const customTextValue = customText || 'Action confirmée';
    const modalStyles = Object.assign({ position: 'fixed', top: 0, left: 0, display: isOpen ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.7)' }, globalStyles);
    const containerTextModalStyles = Object.assign(Object.assign({ backgroundColor: 'white', width: '100%', maxWidth: '400px', padding: '1rem', textAlign: 'center' }, containerStyles), customStyles === null || customStyles === void 0 ? void 0 : customStyles.containerStyles);
    const h2Styles = Object.assign({ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }, h2StylesProp);
    const buttonStyles = Object.assign(Object.assign({ backgroundColor: 'green', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem' }, buttonStylesProp), customStyles === null || customStyles === void 0 ? void 0 : customStyles.buttonStyles);
    return (react_1.default.createElement("div", { style: Object.assign(Object.assign({}, modalStyles), globalStyles) },
        react_1.default.createElement("div", { style: Object.assign(Object.assign({}, containerTextModalStyles), containerStyles) },
            react_1.default.createElement("h2", { style: Object.assign({}, h2Styles) }, customTextValue),
            react_1.default.createElement("button", { style: Object.assign({}, buttonStyles), onClick: handleClose }, "X"))));
};
exports.MaModale = MaModale;
