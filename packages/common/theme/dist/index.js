import { lighten, darken } from 'polished';
export var fonts = {
    body: '"Helvetica Neue", Roboto, sans-serif',
    heading: '"Roboto", sans-serif',
    monospace: 'Menlo, monospace',
};
export var baseFontSize = 16;
export var fontSizes = [
    '0.625rem',
    '0.75rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3rem',
];
export var fontWeights = {
    regular: 400,
    medium: 500,
    bold: 700,
};
export var lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
};
export var letterSpacings = {
    default: 'normal',
    tracked: '0.04em',
};
export var space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export var sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];
export var breakpoints = ['40em', '56em', '64em'];
export default {
    light: {
        space: space,
        sizes: sizes,
        fonts: fonts,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        breakpoints: breakpoints,
        colors: {
            brand: {
                primary: '#012E86',
                secondary: '#0064D9',
                accent: '#DB7C00',
                muted: '#C6DAF7',
            },
            ui: {
                primary: '#262626',
                secondary: '#757575',
                tertiary: '#F1F1F1',
                quaternary: '#FFFFFF',
                disabled: '#DEDEDE',
                error: '#D0421B',
                success: '#138000',
            },
            bg: {
                primary: '#FFFFFF',
                secondary: '#F1F1F1',
            },
            text: {
                primary: '#262626',
                secondary: '#757575',
                disabled: '#9C9C9C',
                inverse: '#FFFFFF',
                error: '#D0421B',
                success: '#138000',
            },
            highlights: {
                primaryHighlight: darken(0.1, '#012E86'),
                primaryExtraHighlight: darken(0.2, '#012E86'),
                bgHighlight: darken(0.1, '#FFFFFF'),
            },
        },
    },
    dark: {
        space: space,
        sizes: sizes,
        fonts: fonts,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        lineHeights: lineHeights,
        letterSpacings: letterSpacings,
        breakpoints: breakpoints,
        colors: {
            brand: {
                primary: '#298DFF',
                secondary: '#7CAEE8',
                accent: '#FDB447',
                muted: '#B7CBEA',
            },
            ui: {
                primary: '#FFFFFF',
                secondary: '#A1A1A1',
                tertiary: '#3C3C3C',
                quaternary: '#262626',
                disabled: '#242424',
                error: '#FF4D4D',
                success: '#1CBD00',
            },
            bg: {
                primary: '#111111',
                secondary: '#262626',
            },
            text: {
                primary: '#FFFFFF',
                secondary: '#A1A1A1',
                disabled: '#525252',
                inverse: '#262626',
                error: '#FF4D4D',
                success: '#1CBD00',
            },
            highlights: {
                primaryHighlight: lighten(0.1, '#298DFF'),
                primaryExtraHighlight: lighten(0.2, '#298DFF'),
                bgHighlight: lighten(0.1, '#111111'),
            },
        },
    },
};
