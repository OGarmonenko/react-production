type TMods = Record<string, string|boolean>

export function classNames(
    cls: string,
    mods: TMods = {},
    additional: Array<string | undefined> = [],
):string {
    return [
        cls,
        ...additional,
        ...Object.keys(mods).filter((key) => mods[key]),
    ].join(' ');
}
