import React, { FC, HTMLAttributes } from "react";

import './module-wrapper.scss';

interface IModuleWrapper extends HTMLAttributes<HTMLElement> {

}

export const ModuleWrapper: FC<IModuleWrapper> = ({className, ...props}) => (
    <div className={`module-wrapper ${className}`} {...props} />
    );
