
type TMods = Record<string, string|boolean>

export function classNames(cls: string, mods: TMods = {}, additional: string[] = []):string {
    return [
        cls,
        ...additional,
        ...Object.keys(mods).filter(key => mods[key])
    ].join(' ');
}