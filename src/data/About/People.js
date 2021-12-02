import ElisavetaImage from '../../assets/musicians/Elizaveta.jpg'
import NataliaImage from '../../assets/musicians/Natalia.jpg'
import DimitriImage from '../../assets/musicians/Dimitri.jpg'

export const PEOPLE = Object.freeze({
	ELIZAVETA: 'ELIZAVETA',
	NATALIA: 'NATALIA',
	DIMITRY: 'DIMITRY',
})

export const mapNamesToBio = Object.freeze({
	[PEOPLE.NATALIA]: {
		fullName: 'Natalia Szmydt',
		photo: NataliaImage,
		website: 'https://www.nataliaszmydt.com/',
		bio: "Polish violinist Natalia Szmydt has won multiple awards and scholarships during her education and career. She graduated from the Conservatorium van Amsterdam with a master's degree where she also took a part in the Netherlands Philharmonic Orchestra and Netherlands Chamber Music Orchestra Academy. For the last years, Natalia performed mostly as a violinist in Artem Trio – a promising and successful piano trio with growing recognition. Natalia has been awarded Grand Prix in International Violin Competition Citta di Barletta in 2014 and received a distinction in International Chamber Music in Olsztyn, Poland the same year. She received II price in National Violin Competition in The Netherlands in 2016. In 2011 Natalia has been rewarded an audience reward and a destination in an Austrian International Violin Competition in Zell an der Pram. She has been rewarded with a number of scholarships, first of which was part of the international youth orchestra program IYSO in Bremen, Germany, where Natalia has been chosen as a leader of a section. One of the last ones was Festival Musique à Flaine in France.  Natalia has performed in one of the biggest halls in The Netherlands, like Concertgebouw, Muziekgebouw, and De Doelen, as well as Pau Casals in Spain, or Baltic Philharmonic in Poland, and many others. She also performed as a soloist in Poland, The Netherlands, Czech Republic, Italy, Finland, and Japan. She worked with highly recognized musicians such as Agata Szymczewska, Marc Albrecht, Yuzuko Horigome, Anna Fedorova, Simone Lamsma, and many more.",
	},
	[PEOPLE.ELIZAVETA]: {
		fullName: 'Elizaveta Agrafenina',
		photo: ElisavetaImage,
		website: 'https://www.agrafenina.com/',
		bio: 'The Russian-Norwegian soprano, Elizaveta Agrafenina, recently graduated from the Conservatory of Amsterdam with a master’s degree in classical voice, with Sasja Hunnego as her voice teacher. She is a part of the Young Artist Program at Bergen National Opera in Norway and has since 2017 sung in several productions. Elizaveta is strongly committed to the performance of lied and chamber music and is quickly becoming recognized for her musical versatility in a wide-ranging repertoire. She formed DUO21 with Satomi Chihara as well as the Finnish music festival Pyhäjärven Kamarimusiikki with Siiri Niittymaa, where the goal is to perform more music by female composers. She has been awarded several scholarships to continue her musical development and honorary awards for her outstanding musicianship.',
	},
	[PEOPLE.DIMITRY]: {
		fullName: 'Dimitri Malignan',
		photo: DimitriImage,
		website: 'https://www.dimitrimalignan.com/',
		bio: 'The brilliant young French pianist, Dimitri Malignan,  is the winner of the “Prix Cortot” in 2017, at the age of 19, and a laureate of more than 20 international competitions, already impresses juries and the public by his level of maturity, musical intelligence, and great sensibility. Born in 1998 in Paris, he is notably the grandson of the Romanian composer Henry Mălineanu. Dimitri studied with Ludmila Berlinskaya at the Ecole Normale de Musique “A. Cortot” in Paris and with Naum Grubert at the Conservatory of Amsterdam, where he both gained the highest distinctions “Prix Cortot” in Paris and “Cum Laude” for his Master in Music. Dimitri has performed in the most prestigious venues and festivals in Europe, as a soloist, chamber music, and with orchestras. Passionate about promoting unknown music, Dimitri initiated in 2020 the “Missing Voices” project, dedicated to Jewish composers who were murdered in the Shoah.',
	},
})
