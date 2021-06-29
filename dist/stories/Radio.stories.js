"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_2 = require("@storybook/react");
const src_1 = require("../src");
react_2.storiesOf('Radio', module)
    .add('Radio Group', () => {
    const options = [
        { id: 1, value: 'Alpha' },
        { id: 2, value: 'Beta' },
    ];
    const [option, setOption] = react_1.useState(options[1].id);
    return (react_1.default.createElement("form", null, options.map((item) => (react_1.default.createElement(src_1.Radio, { name: "radio", key: item.id, label: item.value, value: item.value, checked: option === item.id, onChange: () => setOption(Number(item.id)) })))));
})
    .add('Checked Radio', () => (react_1.default.createElement(src_1.Radio, { label: "Checked", value: "Checked", name: "radio", defaultChecked: true, readOnly: true })))
    .add('Unchecked Radio', () => (react_1.default.createElement(src_1.Radio, { label: "Unchecked", value: "Unchecked", name: "radio", checked: false, readOnly: true })));
