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
declare const RadioWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export { RadioWrapper as Radio };
//# sourceMappingURL=index.d.ts.map