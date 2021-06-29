"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
exports.Input = ({ name, type = 'text', color = '#7159c1', value, setValue, placeholder, icon, }) => {
    return (react_1.default.createElement(styles_1.Label, { htmlFor: name, color: color, icon: icon },
        react_1.default.createElement("input", { name: name, type: type, "aria-label": name, value: value, placeholder: placeholder, onChange: (e) => setValue(e.target.value) }),
        icon && icon));
};
