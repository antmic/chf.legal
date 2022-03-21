import { getLibor } from "./getLibor.js"

export function getLiborList(instDates) {
	let liborList = []
	for (const element of instDates) {
		liborList.push(Number(getLibor(element)))
	}
	//console.log(liborList)
	return liborList
}
