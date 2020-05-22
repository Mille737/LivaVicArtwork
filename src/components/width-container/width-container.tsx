import React, { FC, HTMLAttributes } from "react";

import './width-container.scss';

export const WidthContainer: FC<HTMLAttributes<HTMLElement>> = ({className, ...props}) => (
    <div className={`width-container ${className}`} {...props} />
);
