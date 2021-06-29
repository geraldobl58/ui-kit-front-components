import React from 'react';
export interface Props {
    name: string;
    value: string;
    setValue: (text: string) => void;
    type?: string;
    color?: string;
    placeholder?: string;
    icon?: React.ReactNode | React.Component;
}
export interface ILabel {
    icon?: React.ReactNode | React.Component;
}
export declare const Input: React.FC<Props>;
//# sourceMappingURL=index.d.ts.map