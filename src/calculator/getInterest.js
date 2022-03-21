export function getInterests(liborList, creditMargin) {
	let interestList = []
	for (let libor of liborList) {
		libor = libor + creditMargin
		interestList.push(libor)
	}
	return interestList
}
