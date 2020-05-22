import React, { FC } from "react";
import { WidthContainer } from "../../components/width-container/width-container";
import logo from "../../LivaVicLogo.svg";

import './header.scss';

export const Header: FC = () => {
    return (
        <header className="header">
            <WidthContainer className="header__container">
                <img src={logo} className="header__logo" alt="logo" />
                <h1 className="header__title">LivaVic Artwork</h1>
                <div className="header__menu">
                    <a href="">Kontakt Info</a>
                </div>
            </WidthContainer>
        </header>
    );
};
