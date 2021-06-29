"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark = exports.Radio = exports.Label = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Label = styled_components_1.default.label `
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  height: 22px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
  color: #fff;
  font-size: 16px;
  &:hover span,
  input:checked ~ span {
    background-color: ${(props) => props.color};
  }
`;
exports.Radio = styled_components_1.default.input.attrs({
    type: 'radio',
}) `
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked ~ span:after {
    display: block;
  }
`;
exports.Mark = styled_components_1.default.span `
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  transition: 180ms ease-in-out;
  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 6.8px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
