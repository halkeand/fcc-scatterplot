export const toMinAndSec = sec => {
	const minutes = Math.floor(sec / 60)
	const seconds = sec - minutes * 60
	return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
