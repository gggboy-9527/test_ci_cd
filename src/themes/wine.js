export const wineTheme = {
    name: 'wine',
    light: {
        naive: {
            common: {
                primaryColor: '#d03050',      // 玫红色
                primaryColorHover: '#de576d',
                bodyColor: '#fff0f5',         // LavenderBlush，浅粉背景
                textColorBase: '#4a0d18'      // 深红褐色文字
            }
        },
        custom: {
            '--app-bg': '#fff0f5',
            '--sidebar-bg': '#ffe4e1',      // 迷雾玫瑰色
            '--main-text': '#4a0d18'
        }
    },
    dark: {
        naive: {
            common: {
                primaryColor: '#ff6685',      // 亮粉色
                primaryColorHover: '#ff859f',
                bodyColor: '#2d0f15',         // 极深的红黑色背景
                textColorBase: '#ffdee6'
            }
        },
        custom: {
            '--app-bg': '#2d0f15',
            '--sidebar-bg': '#42151e',
            '--main-text': '#ffdee6'
        }
    }
}