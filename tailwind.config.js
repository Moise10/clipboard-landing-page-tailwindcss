module.exports = {
	content: ['./dist/index.html'],
	theme: {
		extend: {
			container: {
				padding: '6rem',
			},
			screens: {
				sm: '360px',
				// => @media (min-width: 640px) { ... }

				md: '799px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
		},
	},
	plugins: [],
};
