import fetch from 'node-fetch'

export async function getRate(date) {
	return fetch('https://api.exchangerate.host/' + date + '?symbols=PLN&base=CHF').then(res => res.json())
}

//----------------------------------------------------------------------------
//or use this
// const fun = async () => {
// 	const response = await fetch('https://api.exchangerate.host/' + creditDate + '?symbols=PLN&base=CHF')
// 	return response.json()
// }
// const data = await fun()