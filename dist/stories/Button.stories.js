"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const src_1 = require("../src");
react_2.storiesOf('Button', module)
    .add('Default', () => react_1.default.createElement(src_1.Button, null, "Default"))
    .add('Outlined', () => react_1.default.createElement(src_1.Button, { outlined: true }, "Outlined"))
    .add('Disabled', () => react_1.default.createElement(src_1.Button, { disabled: true }, "Default"));
