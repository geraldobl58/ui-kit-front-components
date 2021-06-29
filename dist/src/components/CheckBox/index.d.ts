import React from 'react';
export interface Props {
    label: string;
    name: string;
    value: any;
    color?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    readOnly?: boolean;
    onChange?: () => void;
}
export interface ILabel {
    color?: string;
}
export interface IBox {
    ref: any;
}
export declare const CheckBox: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
//# sourceMappingURL=index.d.ts.map