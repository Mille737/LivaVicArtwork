interface IClasses {
    /**
     *
     * We allow explicit any here since we don't want the caller to have
     * to convert to a boolean every time they need to set a
     * class. Whether we do !! in the callsite or here doesn't matter.
     *
     */

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

function joinClassNames(classNames: undefined | string | IClasses): string {
    if (typeof classNames === 'undefined') {
        return '';
    }

    if (typeof classNames === 'string') {
        return classNames;
    }

    return Object.keys(classNames)
        .filter(key => !!classNames[key])
        .join(' ');
}

export function cx(
    ...classNames: Array<undefined | string | IClasses>
): string {
    return classNames.map(joinClassNames).join(' ');
}
