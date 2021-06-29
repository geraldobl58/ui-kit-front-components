"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Close = exports.Container = exports.FullScreen = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FullScreen = styled_components_1.default.div `
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeModal 380ms ease-in-out 1;
  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;
exports.Container = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1e1d24;
  border-radius: 8px;
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;
  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  color: #c4c4c4;
  h2 {
    color: #fff;
    margin-bottom: 28px;
  }
`;
exports.Close = styled_components_1.default.button `
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.3);
  background: transparent;
  border: 0;
  font-size: 16px;
  &:hover {
    color: #fff;
  }
`;
