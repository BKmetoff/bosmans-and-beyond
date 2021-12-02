import { useState, useEffect } from 'react'

// the method below is from
// https://codesandbox.io/s/34kr2rw285?file=/src/index.js

const getWindowDimensions = () => {
	const { innerWidth: width } = window
	return { width }
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
