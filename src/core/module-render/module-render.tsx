import React, { FC } from "react";
import { Hero } from "../../modules/hero/hero";
import { FiftyFifty } from "../../modules/50-50/fifty-fifty";
import { ImageOverview } from "../../modules/image-overview/image-overview";

/**
 *
 * This component handles all dynamic rendering of site modules
 *
 */

/**
 * Here we register all the implemented block modules
 */

interface IComponent {
    [key: string]: FC;
}

const MODULES: IComponent = {
    HeroModule: Hero,
    FiftyFiftyModule: FiftyFifty,
    ImageOverviewModule: ImageOverview
};

/**
 * Typings to handle BE contract
 */

interface IContentModule {
    kind: keyof typeof MODULES;
    id: string;
}

/**
 * Dynamic rendering function
 *
 * @param modulesByKind
 */

const createModuleLoop = (modulesByKind: IComponent): FC<IModuleRender> => {
    return ({modules} : IModuleRender): JSX.Element => {
        if (!modules) {
            return <></>;
        }
        return (
            <>
            {
                modules.map(({kind, id, ...module}) => {
                    const Comp: FC<{id: string}> = modulesByKind[kind];

                    if (!Comp) {
                        // Alert error

                        console.warn(`Mismatch of module kind: ${kind}`);
                        return null;
                    }

                    /**
                     * All is good, and we return the desired component
                     */

                    return (<Comp {...module} id={id}/>)
                })
            }
            </>
        );
    };
}

/**
 *  Internal usage types & React component
 */

export interface IModuleRender {
    modules?: IContentModule[];
}

export const ModuleRender: FC<IModuleRender> = createModuleLoop(MODULES);
