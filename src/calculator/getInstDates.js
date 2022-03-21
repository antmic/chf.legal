export function getInstDates(instDate) {
	let dates = []

	let _0Month = ''

	const date = new Date(instDate)

	const dateYear = date.getFullYear() // number

	const dateMonth = date.getMonth() + 1 // number

	const now = new Date()
	const nowYear = now.getFullYear() // number
	const nowMonth = date.getMonth() + 1 // number

	let iYear = dateYear
	let iMonth = dateMonth

	for (; iYear <= nowYear; iYear++) {
		for (; iMonth <= 12; iMonth++) {
			if (iYear === nowYear) {
				if (iMonth <= nowMonth + 1) {
				} else {
					break
				}
			}
			if (iMonth < 10) {
				_0Month = `0${iMonth}`.slice(-2)
			} else {
				_0Month = `${iMonth}`
			}
			dates.push(`${iYear}-${_0Month}`)
		}
		iMonth = 1
	}

	return dates
}
