import FBLogo from '../../assets/icons/facebook.svg'
import InstagramLogo from '../../assets/icons/instagram.svg'
import YoutubeLogo from '../../assets/icons/youtube.svg'

export const SOCIAL_MEDIA = Object.freeze({
	FACEBOOK: 'facebook',
	INSTAGRAM: 'instagram',
	YOUTUBE: 'youtube',
})

export const mapTitleToMedia = Object.freeze({
	[SOCIAL_MEDIA.FACEBOOK]: {
		logo: FBLogo,
		profile: '/BosmansBeyond',
		url: 'https://www.facebook.com/BosmansBeyond/',
	},
	[SOCIAL_MEDIA.INSTAGRAM]: {
		logo: InstagramLogo,
		profile: '/bosmansbeyond',
		url: 'https://www.instagram.com/bosmansbeyond/',
	},
	[SOCIAL_MEDIA.YOUTUBE]: {
		logo: YoutubeLogo,
		profile: 'Bosmans & Beyond',
		url: 'https://www.youtube.com/channel/UCDmtuNR6rWMsMwmSh8kSfHg',
	},
})
