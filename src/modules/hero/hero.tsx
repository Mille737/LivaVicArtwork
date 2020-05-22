import React, { FC } from "react";
import { ModuleWrapper } from "../../components/module-wrapper/module-wrapper";

import './hero.scss';

export const Hero: FC = () => {
    return (
        <ModuleWrapper className="hero">
            <img className="hero__image" src="https://placekitten.com/1200/600" alt="kitten" />
        </ModuleWrapper>
        );
};
