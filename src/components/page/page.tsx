import React, { FC } from "react";
import { Header } from "../../shell/header/header";
import { WidthContainer } from "../width-container/width-container";
import { IModuleRender, ModuleRender } from "../../core/module-render/module-render";

import './page.scss';

export const Page: FC = () => {

    /**
     * Temporary data simulating the BE data
     */

    const DATA: IModuleRender = {
        modules: [
            {
                kind: 'ImageOverviewModule',
                id: 'm02'
            }
        ]
    };

    return (
        <div className="page">
            <Header />

            <main>
                <WidthContainer>
                    <ModuleRender {...DATA} />
                </WidthContainer>
            </main>

            <footer>
                footer
            </footer>
        </div>
    );
};
