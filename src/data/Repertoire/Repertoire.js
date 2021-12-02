export const COMPOSERS = Object.freeze({
	Bach: 'Bach',
	Bosmans: 'Bosmans',
	Fauré: 'Fauré',
	Grieg: 'Grieg',
	Hermann: 'Hermann',
	Kattenburg: 'Kattenburg',
	Kuyper: 'Kuyper',
	Massenet: 'Massenet',
	Mozart: 'Mozart',
	Rachmaninoff: 'Rachmaninoff',
	Schubert: 'Schubert',
	Schumann: 'Schumann',
	Strauss: 'Strauss',
	Wieniawski: 'Wieniawski',
})

export const mapComposersToPieces = Object.freeze({
	[COMPOSERS.Bach]: {
		name: 'Johann Sebastian Bach',
		pieces: [
			{
				title: 'Adagio in G major, BWV968',
				type: 'piano solo',
			},
			{
				title: 'Adagio in G major, BWV968',
				type: 'piano solo',
			},
			{
				title: 'Fantasia & Fugue (unfinished) BWV906',
				type: 'piano solo',
			},
			{
				title: 'Prelude, Fugue & Allegro in E-flat major, BWV998',
				type: 'piano solo',
			},
		],
	},
	[COMPOSERS.Bosmans]: {
		name: 'Henriëtte Bosmans',
		pieces: [{ title: 'Les Berceaux', type: 'violin & piano' }],
	},
	[COMPOSERS.Fauré]: {
		name: 'Gabriel Fauré',
		pieces: [
			{ title: 'Concertstuk', type: 'violin & piano' },
			{ title: '6 Preludes', type: 'piano solo' },
			{ title: 'Chanson', type: 'soprano & piano' },
			{ title: 'Le diable court dans la nuit', type: 'soprano & piano' },
			{ title: 'Lead, kindly light', type: 'soprano & piano' },
		],
	},
	[COMPOSERS.Grieg]: {
		name: 'Edvard Grieg',
		pieces: [{ title: 'Six German Songs Op 48', type: 'soprano & piano' }],
	},
	[COMPOSERS.Hermann]: {
		name: 'Pál Hermann',
		pieces: [
			{ title: 'La Ceinture', type: 'soprano & piano' },
			{ title: 'La Dormeuse', type: 'soprano & piano' },
		],
	},
	[COMPOSERS.Kattenburg]: {
		name: 'Dick Kattenburg',
		pieces: [{ title: 'Palestinian Songs', type: 'soprano & piano' }],
	},
	[COMPOSERS.Kuyper]: {
		name: 'Elisabeth Kuyper',
		pieces: [
			{ title: 'Sonata in A major', type: 'violin & piano' },
			{ title: 'Der Pfeil und das Lied', type: 'soprano & piano' },
		],
	},
	[COMPOSERS.Massenet]: {
		name: 'Jules Massenet',
		pieces: [{ title: 'Élégie', type: 'soprano, violin, piano' }],
	},
	[COMPOSERS.Mozart]: {
		name: 'Wolfgang A. Mozart',
		pieces: [{ title: 'Sonata in E-minor', type: 'violin & piano' }],
	},
	[COMPOSERS.Rachmaninoff]: {
		name: 'Sergei Rachmaninoff',
		pieces: [
			{ title: 'Lilacs', type: 'piano solo' },
			{ title: 'Margaritki', type: 'soprano & piano' },
			{ title: 'Spring Waters', type: 'soprano & piano' },
			{ title: 'Oh do not sing to me', type: 'soprano, violin, piano' },
		],
	},
	[COMPOSERS.Schubert]: {
		name: 'Franz Schubert',
		pieces: [{ title: '3 Klavierstücke, D.946', type: 'piano solo' }],
	},
	[COMPOSERS.Schumann]: {
		name: 'Robert Schumann',
		pieces: [
			{ title: 'Widmung', type: 'piano solo' },
			{ title: 'Aus den hebräischen Gesängen', type: 'piano solo' },
			{ title: 'Fantaisie Op 17', type: 'piano solo' },
		],
	},
	[COMPOSERS.Strauss]: {
		name: 'Richard Strauss',
		pieces: [{ title: 'Morgen!', type: 'soprano, violin, piano' }],
	},
	[COMPOSERS.Wieniawski]: {
		name: 'Henryk Wieniawski',
		pieces: [{ title: 'Legend', type: 'violin & piano' }],
	},
})
