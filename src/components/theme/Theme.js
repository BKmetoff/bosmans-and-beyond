export const BIO_IMAGE_SIZE = '300px'

export const TRANSITION = 'ease 0.5s'

export const MARGIN = Object.freeze({
	auto: 'auto',
	XS: '8px',
	S: '12px',
	M: '30px',
	L: '50px',
	XL: '70px',
	XXL: '100px',
})

export const PADDING = Object.freeze({
	none: '0px',
	XXS: '5px',
	XS: '10px',
	S: '15px',
	M: '30px',
	L: '50px',
	XL: '80px',
})

export const SHADOW = Object.freeze({
	S: '0 1px 10px rgba(0, 0, 0, 0.2)',
	M: '0 4px 20px rgba(0, 0, 0, 0.2)',
	L: '0 10px 15px rgba(0,0,0,0.2)',
	button: '0 5px 10px rgba(0,0,0,0.2)',
	inverted: '0 -4px 20px rgba(0, 0, 0, 0.2)',
	mPrimary: '0 4px 20px #6083ad52',
})

export const COLORS = Object.freeze({
	primary: '#6083ad',
	accent: '#fcd088',
	accentBorder: '#fcd0884f',
	light: '#e2e2e2',
	dark: '#363b3e',
	backgroundFrom: '#dce0df',
	backgroundTo: '#e0e4e3',
	background: '#fff1a930',
	transparent: '#000000cf',
	opaque: '#ffffff00',
})

export const BORDER_RADIUS = Object.freeze({
	S: '3px',
	M: '5px',
})

export const PAGE_TRANSITIONS = Object.freeze({
	variants: {
		initial: { opacity: 0, y: '-10vh' },
		in: { opacity: 1, y: 0 },
		out: { opacity: 0, y: '10vh' },
	},
	transitions: {
		type: 'tween',
		ease: 'linear',
		duration: 0.25,
	},
})
