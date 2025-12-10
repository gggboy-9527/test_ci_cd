export const oceanTheme = {
    name: 'ocean',
    light: {
        naive: {
            common: {
                primaryColor: '#2080f0',      // 经典的科技蓝
                primaryColorHover: '#4098fc',
                primaryColorPressed: '#1060c9',
                bodyColor: '#f0f8ff',         // AliceBlue，极浅的蓝白色背景
                textColorBase: '#000000'
            }
        },
        custom: {
            '--app-bg': '#f0f8ff',          // 对应 bodyColor
            '--sidebar-bg': '#e6f2ff',      // 侧边栏稍微深一点的蓝
            '--main-text': '#003366'        // 文字不是纯黑，而是深蓝黑
        }
    },
    dark: {
        naive: {
            common: {
                primaryColor: '#70c0e8',      // 暗色模式下，主色调亮一点
                primaryColorHover: '#8acdec',
                bodyColor: '#0d1117',         // 深蓝灰背景
                textColorBase: '#c9d1d9'
            }
        },
        custom: {
            '--app-bg': '#0d1117',
            '--sidebar-bg': '#161b22',
            '--main-text': '#c9d1d9'
        }
    }
}