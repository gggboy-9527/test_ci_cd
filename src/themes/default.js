// src/themes/default.js
export const defaultTheme = {
    name: 'default',
    light: {
        naive: {
            common: {
                primaryColor: '#18a058',
                primaryColorHover: '#36ad6a',
                bodyColor: '#ffffff',
                textColorBase: '#000000'
            }
        },
        custom: {
            '--app-bg': '#ffffff',
            '--sidebar-bg': '#f5f7fa', //稍微灰一点，区分侧边栏
            '--main-text': '#333333'
        }
    },
    dark: {
        naive: {
            common: {
                primaryColor: '#63e2b7',
                primaryColorHover: '#7fe7c4',
                bodyColor: '#101014',
                textColorBase: '#ffffff'
            }
        },
        custom: {
            '--app-bg': '#101014',
            '--sidebar-bg': '#18181c',
            '--main-text': '#ffffff'
        }
    }
}