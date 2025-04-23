import 'styled-components'
import { defaultTheme } from 'src/styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme {
        white: string;
        'blue-200': string;
        'blue-500': string;
        'blue-800': string;
        'gray-300': string;
        yellow: string;
    }
}