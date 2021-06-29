"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
exports.Modal = (_a) => {
    var { open, setOpen, title, children } = _a, props = __rest(_a, ["open", "setOpen", "title", "children"]);
    return (react_1.default.createElement(styles_1.FullScreen, { open: open },
        react_1.default.createElement(styles_1.Container, Object.assign({}, props, { title: title }),
            react_1.default.createElement(styles_1.Close, { onClick: () => setOpen(false) }, "X"),
            react_1.default.createElement("h2", null, title),
            children)));
};
