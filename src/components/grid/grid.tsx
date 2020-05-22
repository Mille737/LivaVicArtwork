import React from 'react';
import { cx } from '../../utilities/classnames/cx';

import './grid.scss';

type IGridProps<
    TElement extends keyof JSX.IntrinsicElements
    > = JSX.IntrinsicElements[TElement] & {
    as?: TElement;

    paddingKilo?: boolean;
};

interface IGrid {
    <TElement extends keyof JSX.IntrinsicElements>(
        props: IGridProps<TElement>
    ): JSX.Element;
    Item: <TElement extends keyof JSX.IntrinsicElements>(
        props: IGridItemProps<TElement>
    ) => JSX.Element;
}

export const Grid: IGrid = ({
    as: As = 'div',
    className,
    paddingKilo,
    ...props
}) => {
    const Tag = As as React.ElementType;

    return (
        <div className="grid">
            <Tag
                {...props}
                className={cx(className, 'grid__inner', {
                    'grid__inner--padding-kilo': paddingKilo,
                })}
            />
        </div>
    );
};

type IGridItemProps<
    TElement extends keyof JSX.IntrinsicElements
    > = JSX.IntrinsicElements[TElement] & {
    as?: TElement;

    oneHalf?: boolean;
    oneThird?: boolean;
    twoThirds?: boolean;

    fill?: boolean;
    alignRight?: boolean;
    mediumAlignRight?: boolean;
    fromMediumAlignRight?: boolean;
};

Grid.Item = function GridItem({
                                  className,
                                  as: As = 'div',

                                  oneHalf,
                                  oneThird,
                                  twoThirds,

                                  fill,

                                  alignRight,
                                  mediumAlignRight,
                                  fromMediumAlignRight,
                                  ...props
                              }): JSX.Element {
    const Tag = As as React.ElementType;

    return (
        <Tag
            {...props}
            className={cx(className, 'grid__item', {
                'grid__item--one-half': oneHalf,
                'grid__item--one-third': oneThird,
                'grid__item--two-thirds': twoThirds,

                'grid__item--fill': fill,

                'grid__item--align-right': alignRight,
                'grid__item--medium-align-right': mediumAlignRight,
                'grid__item--from-medium-align-right': fromMediumAlignRight,
            })}
        />
    );
};
