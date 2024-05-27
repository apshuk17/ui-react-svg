export enum SvgSize {
    xs = '18',
    sm = '24',
    md = '36',
    lg = '48',
}

export enum SvgNames {
    cancel = 'cancel',
    menu = 'menu',
    search = 'search',
    settings = 'settings',
    star = 'star'
}

export type SvgNamesType = keyof typeof SvgNames;

export type SvgSizeType = keyof typeof SvgSize;