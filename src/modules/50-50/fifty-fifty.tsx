import React, { FC } from "react";
import { ModuleWrapper } from "../../components/module-wrapper/module-wrapper";
import { Grid } from "../../components/grid/grid";

interface IFiftyFifty {

}

export const FiftyFifty: FC<IFiftyFifty> = () => {
    return (
        <ModuleWrapper>
            <Grid>
                <Grid.Item oneHalf>
                    <h2>Hello world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    {/*<img className="hero__image" src="https://placekitten.com/1200/600" alt="kitten" />*/}
                </Grid.Item>
                <Grid.Item oneHalf>
                    <h2>Hello world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Grid.Item>
                <Grid.Item oneHalf>
                    <h2>Hello world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Grid.Item>
            </Grid>
        </ModuleWrapper>
    );
};
