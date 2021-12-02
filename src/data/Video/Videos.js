import { mapNamesToMusicians } from './People'

export const VIDEO_TITLES = Object.freeze({
	KINDLY: 'KINDLY',
	CONCERT: 'CONCERT',
	SERENATA: 'SERENATA',
})

export const mapTitlesToVideos = Object.freeze({
	[VIDEO_TITLES.KINDLY]: {
		author: 'Henriëtte Bosmans',
		title: 'Lead, kindly light',
		url: 'https://www.youtube.com/watch?v=AVB2cjtmAKE',
		musicians: [
			mapNamesToMusicians['ELIZAVETA'],
			mapNamesToMusicians['SATOMI'],
		],
	},
	[VIDEO_TITLES.CONCERT]: {
		author: 'Henriëtte Bosmans',
		title: 'Concertstuk (excerpts)',
		url: 'https://www.youtube.com/watch?v=8dT7HavtE1w',
		musicians: [mapNamesToMusicians['NATALIA'], mapNamesToMusicians['DIMITRY']],
	},
	[VIDEO_TITLES.SERENATA]: {
		author: 'Elisabeth Kuyper',
		title: 'Serenata Ticinese',
		url: 'https://www.youtube.com/watch?v=wGBuyjSqF5s',
		musicians: [mapNamesToMusicians['SATOMI']],
	},
})
