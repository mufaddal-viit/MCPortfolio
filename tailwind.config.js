/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	screens: {
  		sm: '350px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	colors: {
  		brown: '#53423e',
  		lightBrown: '#645550',
  		black: '#1e1917',
  		white: '#f1e1d9',
  		cyan: '#15d1e9',
  		lightCyan: '#88e5f0',
  		darkCyan: '#009fb3',
  		orange: '#fb9718',
  		lightOrange: '#fac27b',
  		darkOrange: '#d28422',
  		grey: '#626965',
  		lightGrey: '#978580',
  		darkGrey: '#3f4441',
  		darkBrown: '#6F4E37',
  		newcolor: '#E3DAC9',
  		html: '#E44D26',
  		css: '#1572B6',
  		javascript: '#F7DF1E',
  		react: '#61DAFB',
  		redux: '#764ABC',
  		tailwind: '#38BDF8',
  		nodejs: '#339933',
  		express: '#000000',
  		github: '#181717',
  		mysql: '#00758F',
  		mongodb: '#47A248',
  		background: 'rgb(var(--color-background) / <alpha-value>)',
  		foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
  		surface: 'rgb(var(--color-surface) / <alpha-value>)',
  		'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
  		border: 'rgb(var(--color-border) / <alpha-value>)',
  		muted: 'rgb(var(--color-muted) / <alpha-value>)',
  		primary: 'rgb(var(--color-primary) / <alpha-value>)',
  		'primary-foreground': 'rgb(var(--color-primary-foreground) / <alpha-value>)',
  		accent: 'rgb(var(--color-accent) / <alpha-value>)',
  		'accent-foreground': 'rgb(var(--color-accent-foreground) / <alpha-value>)',
  		ring: 'rgb(var(--color-ring) / <alpha-value>)'
  	},
  	extend: {
  		boxShadow: {
  			cyanShadow: '0px 0px 20px 0px rgba(94, 206, 220, 0.5)',
  			cyanBigShadow: '10px 10px 1000px 500px rgba(94, 206, 220, 0.3)',
  			cyanMediumShadow: '10px 10px 200px 150px rgba(94, 206, 220, 0.5)',
  			orangeBigShadow: '10px 10px 10000px 500px rgba(240, 169, 79, 0.3)',
  			orangeMediumShadow: '10px 10px 2000px 150px rgba(240, 169, 79, 0.5)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	fontFamily: {
  		'arabic-display': [
  			'Reem Kufi',
  			'sans-serif'
  		]
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
