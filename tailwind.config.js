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
  		typescript: '#3178C6',
  		react: '#61DAFB',
  		redux: '#764ABC',
  		tailwind: '#38BDF8',
  		nodejs: '#339933',
  		express: '#000000',
  		github: '#181717',
  		mysql: '#00758F',
  		mongodb: '#47A248',
  		background: '#F8FAB4',
  		foreground: '#222831',
  		'background-dark': '#222831',
  		'foreground-dark': '#DFD0B8',
  		accent: '#FFC7A7',
  		'accent-dark': '#948979'
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
  			lg: '0.5rem',
  			md: '0.375rem',
  			sm: '0.25rem'
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
