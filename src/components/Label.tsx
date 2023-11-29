export interface LabelProps {
  /**
   * This text is the one to show in the label
   */
  text?: string
  /**
   * If true, the text will be collapsed
   */
  collapsed?: boolean
  /**
   * The border radius of the label
   */
  rounded: true | false
  /**
   * The color of the label
   */
  color?: 'orange' | 'blue' | 'yellow' | 'purple'
  /**
   * The intensity of the color
   */
  intensity: 100 | 200 | 300
  /**
   * If true, the label will be in dark mode
   */
  darkMode: true | false
  /**
   * The size of the label
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * If true, the text will be in uppercase
   */
  allCaps?: true | false
  fontColor?: string
  noBackground?: true | false
}

const labelBgColorsLight = {
  orange: {
    100: '#ec8f6a',
    200: '#ffa372',
    300: '#ffac71'
  },
  blue: {
    100: '#8bbabb',
    200: '#83cdce',
    300: '#9bf3f4'

  },
  yellow: {
    100: '#e2c275',
    200: '#ffe384',
    300: '#ffeb84'

  },
  purple: {
    100: '#b96b9f',
    200: '#df81bf',
    300: '#ff93d3'
  }
}
const labelBgColorsDark = {
  orange: {
    100: '#b97053',
    200: '#85513c',
    300: '#523124'
  },
  blue: {
    100: '#4a7474',
    200: '#294141',
    300: '#080d0d'

  },
  yellow: {
    100: '#af965a',
    200: '#7c6a3f',
    300: '#493e25'

  },
  purple: {
    100: '#854d73',
    200: '#522f46',
    300: '#1f111a'
  }
}

const labelStyles = {
  small: {
    size: 'px-4 py-1',
    fontSize: 'text-xs',
    icon: 'w-8 h-8',
    textMargin: 'mr-6'
  },
  medium: {
    size: 'px-4 py-2',
    fontSize: 'text-md',
    icon: 'w-12 h-12',
    textMargin: 'mr-12'

  },
  large: {
    size: 'px-8 py-4',
    fontSize: 'text-lg',
    icon: 'w-16 h-16',
    textMargin: 'mr-14'
  }
}
export function Label ({
  text = 'Hello everyone',
  collapsed = false,
  color = 'purple',
  intensity,
  darkMode = false,
  rounded = false,
  size = 'medium',
  allCaps = false,
  fontColor = 'white',
  noBackground = false
}: LabelProps) {
  const bgColor = !darkMode
    ? labelBgColorsLight[color][intensity]
    : labelBgColorsDark[color][intensity]

  const textColor = !darkMode ? 'text-black' : 'text-white'

  const roundedClass = rounded ? 'rounded-full' : 'rounded-lg'

  const roundedIcon = rounded ? 'rounded-full' : 'rounded-r-lg'

  const formattedText = allCaps ? text.toUpperCase() : text

  const styles = labelStyles[size]

  return (
    <div className={`border-[1px] ${roundedClass} shadow-xl flex items-center overflow-hidden  relative hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer`}
      style={{ borderColor: bgColor, backgroundColor: noBackground ? 'transparent' : bgColor }}
    >
      <p className={`${textColor} ${styles.size}  ${styles.fontSize} font-bold italic flex-grow flex-1 ${collapsed ? '' : styles.textMargin} `}
        style={{ color: fontColor }}
      >{collapsed ? formattedText.slice(0, 5) : formattedText}</p>
      {/* Icono */}
      {
        !collapsed && <div className={`bg-zinc-100 ${styles.icon}  ${roundedIcon} flex justify-center items-center absolute -right-1  border-[2px]  z-40 `} style={{ borderColor: bgColor }}>💖</div>
      }

    </div>
  )
}
