export function addInput(appendTo) {
	const input = document.createElement('input')
	appendTo.append(input)
	return input
}

export function addDate(appendTo) {
	const input = document.createElement('input')
	setAttributes(input, {
		class: 'credit_date',
		type: 'date',
		min: '2000-01-01',
		max: '2009-12-31',
		placeholder: 'data',
        name: 'input',
        required: 'true',
	})
	appendTo.append(input)
	return input
}

export function removeElementsByClass(className) {
	const elements = document.getElementsByClassName(className)
	if (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0])
	}
}

export function setAttributes(el, attrs) {
	for (var key in attrs) {
		el.setAttribute(key, attrs[key])
	}
}


export function selectBank(bank) {
    const {bank_name} = require('./../views/CalculatorForm');
    const option = document.createElement('option')
	option.setAttribute('value', bank)
	option.textContent = bank
	bank_name.append(option)
}