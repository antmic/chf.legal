import { addInput } from '../common/inputHelpers'
import { addDate } from '../common/inputHelpers'
import { removeElementsByClass } from '../common/inputHelpers'
import { setAttributes } from '../common/inputHelpers'
import { selectBank } from '../common/inputHelpers'

export function CalculatorForm() {
	window.addEventListener(
		'keydown',
		function (e) {
			if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
				if (e.target.nodeName == 'INPUT') {
					e.preventDefault()
					return false
				}
			}
		},
		true
	)

	const section = document.createElement('section')
	const header = document.createElement('header')
	const header_text = document.createElement('h1')

	header_text.textContent = 'Kalkulator'
	header.append(header_text)
	section.append(header)

	const article = document.createElement('article')
	const form = document.createElement('form')
	setAttributes(form, { id: 'form', action: 'http://127.0.0.1:8000/', method: 'POST' })
	//onsubmit: 'submitForm(event)'

	const formField0 = document.createElement('div')
	formField0.setAttribute('class', 'formField')
	const bank_name_label = document.createElement('Label')
	setAttributes(bank_name_label, { for: 'bank_name', class: 'label' })
	bank_name_label.innerHTML = 'Proszę wybrać bank'
	formField0.append(bank_name_label)
	const bank_name = document.createElement('select')
	setAttributes(bank_name, { required: 'true', name: 'input', id: 'bank_name' })
	module.exports = { bank_name }
	selectBank('---')
	selectBank('Alior Bank')
	selectBank('BNP Paribas (BGŻ)')
	selectBank('BPH (GE Money Bank)')
	selectBank('Santander BZ WBK (Kredyt Bank)')
	selectBank('Getin Bank')
	selectBank('ING Bank Śląski')
	selectBank('mBank (BRE Bank)')
	selectBank('Bank Millennium (Eurobank)')
	selectBank('Pekao')
	selectBank('PKO BP (Nordea)')
	selectBank('Raiffeisen (Polbank)')
	selectBank('Inny')
	formField0.append(bank_name)
	form.append(formField0)

	const formField1 = document.createElement('div')
	formField1.setAttribute('class', 'formField')
	const credit_sum_label = document.createElement('Label')
	credit_sum_label.setAttribute('for', 'credit_sum')
	credit_sum_label.innerHTML = 'Kwota wypłaconego kredytu'
	formField1.append(credit_sum_label)
	const credit_sum = addInput(formField1)
	setAttributes(credit_sum, {
		id: 'credit_sum',
		type: 'number',
		placeholder: 'kwota',
		step: '0.01',
		max: '9999999',
		min: '0',
		name: 'input',
		required: 'true',
	})
	form.append(formField1)

	const formField2 = document.createElement('div')
	const button_div = document.createElement('div')
	formField2.setAttribute('class', 'formField')
	const credit_date_label = document.createElement('Label')
	credit_date_label.setAttribute('for', 'credit_sum')
	credit_date_label.innerHTML = 'Data wypłacenia kredytu'
	formField2.append(credit_date_label)
	const credit_date = addInput(formField2)
	setAttributes(credit_date, {
		id: 'credit_date',
		type: 'date',
		min: '2002-01-01',
		max: '2009-12-31',
		placeholder: 'data',
		name: 'input',
		required: 'true',
	})
	const add_button = document.createElement('button')
	add_button.textContent = 'Dodaj pole'
	function adder(e) {
		e.preventDefault()
		addDate(formField2)
		console.log('dodano pole')
	}
	add_button.addEventListener('click', adder)
	button_div.append(add_button)
	const remove_button = document.createElement('button')
	remove_button.textContent = 'Usuń pole'
	function remover(e) {
		e.preventDefault()
		removeElementsByClass('credit_date')
		console.log('usunięto pole')
	}
	remove_button.addEventListener('click', remover)
	button_div.append(remove_button)
	formField2.append(button_div)
	form.append(formField2)

	const formField3 = document.createElement('div')
	formField3.setAttribute('class', 'formField')
	const credit_margin_label = document.createElement('Label')
	credit_margin_label.setAttribute('for', 'credit_margin')
	credit_margin_label.innerHTML = 'Marża banku'
	formField3.append(credit_margin_label)
	const credit_margin = addInput(formField3)
	setAttributes(credit_margin, {
		id: 'credit_margin',
		type: 'number',
		placeholder: '%',
		step: '0.01',
		max: '10',
		min: '0',
		name: 'input',
		required: 'true',
	})
	form.append(formField3)

	const formField4 = document.createElement('div')
	formField4.setAttribute('class', 'formField')
	const first_payment_label = document.createElement('Label')
	first_payment_label.setAttribute('for', 'payment_date')
	first_payment_label.innerHTML = 'Miesiąc zapłaty pierwszej raty'
	formField4.append(first_payment_label)
	const payment_date = addInput(formField4)
	setAttributes(payment_date, {
		id: 'payment_date',
		type: 'month',
		min: '2000-01',
		max: '2010-12',
		placeholder: 'data',
		name: 'input',
		required: 'true',
	})
	form.append(formField4)

	const formField5 = document.createElement('div')
	formField5.setAttribute('class', 'formField')
	const number_of_payments_label = document.createElement('Label')
	number_of_payments_label.setAttribute('for', 'number_of_payments')
	number_of_payments_label.innerHTML = 'Liczba rat'
	formField5.append(number_of_payments_label)
	const number_of_payments = addInput(formField5)
	setAttributes(number_of_payments, {
		id: 'number_of_payments',
		type: 'number',
		placeholder: 'liczba rat',
		step: '1',
		max: '999',
		min: '0',
		name: 'input',
		required: 'true',
	})
	form.append(formField5)

	const formField6 = document.createElement('div')
	formField6.setAttribute('class', 'formField')
	const checkbox_paid = document.createElement('p')
	checkbox_paid.setAttribute('class', 'label')
	checkbox_paid.textContent = 'Czy kredyt został spłacony wcześniej?'
	formField6.append(checkbox_paid)

	const checkbox_div = document.createElement('div')
	const if_early_paid1_label = document.createElement('Label')
	if_early_paid1_label.setAttribute('for', 'if_early_paid1')
	if_early_paid1_label.setAttribute('class', 'checkbox')
	if_early_paid1_label.innerHTML = 'Tak'
	checkbox_div.append(if_early_paid1_label)
	const if_early_paid1 = addInput(checkbox_div)
	setAttributes(if_early_paid1, {
		id: 'if_early_paid1',
		type: 'radio',
		value: 'Tak',
		class: 'paidCheckbox',
		class: 'checkbox',
		name: 'input',
		required: 'true',
	})
	const if_early_paid2_label = document.createElement('Label')
	if_early_paid2_label.setAttribute('for', 'if_early_paid2')
	if_early_paid2_label.setAttribute('class', 'checkbox')
	if_early_paid2_label.innerHTML = 'Nie'
	checkbox_div.append(if_early_paid2_label)
	const if_early_paid2 = addInput(checkbox_div)
	setAttributes(if_early_paid2, {
		id: 'if_early_paid2',
		type: 'radio',
		value: 'Nie',
		class: 'checkbox',
		name: 'input',
		required: 'true',
	})
	if_early_paid2.setAttribute('checked', true)

	if_early_paid1.addEventListener('change', function () {
		if (this.checked) {
			const date_input = document.createElement('input')
			setAttributes(date_input, {
				class: 'paid_date',
				type: 'date',
				min: '2000-01-01',
				placeholder: 'data',
				name: 'input',
				required: 'true',
			})
			formField6.append(date_input)
			console.log('Checkbox is checked.')
		}
	})

	if_early_paid2.addEventListener('change', function () {
		if (if_early_paid2.checked) {
			removeElementsByClass('paid_date')
			console.log('Checkbox is not checked.')
		}
	})

	formField6.append(checkbox_div)
	form.append(formField6)

	const formField7 = document.createElement('div')
	formField7.setAttribute('class', 'formField')
	const checkbox_installment = document.createElement('p')
	checkbox_installment.setAttribute('class', 'label')
	checkbox_installment.textContent = 'Typ rat'
	formField7.append(checkbox_installment)
	const checkbox_div2 = document.createElement('div')
	const installment_label_equal = document.createElement('Label')
	installment_label_equal.setAttribute('for', 'installment_equal')
	installment_label_equal.setAttribute('class', 'checkbox')
	installment_label_equal.innerHTML = 'Równa'
	checkbox_div2.append(installment_label_equal)
	const installment_equal = addInput(checkbox_div2)
	setAttributes(installment_equal, {
		id: 'installment_equal',
		type: 'radio',
		value: 'Równa',
		class: 'checkbox',
		name: 'input',
		name: 'installment',
		required: 'true',
	})
	installment_equal.setAttribute('checked', true)
	const installment_label_decreasing = document.createElement('Label')
	installment_label_decreasing.setAttribute('for', 'installment_decreasing')
	installment_label_decreasing.setAttribute('class', 'checkbox')
	installment_label_decreasing.innerHTML = 'Malejąca'
	checkbox_div2.append(installment_label_decreasing)
	const installment_decreasing = addInput(checkbox_div2)
	setAttributes(installment_decreasing, {
		id: 'installment_decreasing',
		type: 'radio',
		value: 'Malejąca',
		class: 'checkbox',
		name: 'input',
		name: 'installment',
		required: 'true',
	})
	formField7.append(checkbox_div2)
	form.append(formField7)

	const formField8 = document.createElement('div')
	formField8.setAttribute('class', 'formField')
	const submit_button = addInput(formField8)
	setAttributes(submit_button, {
		id: 'submit_btn',
		type: 'submit',
		value: 'Oblicz',
		name: 'input',
		required: 'true',
	})
	form.append(formField8)

	const p_thanks = document.createElement('p')
	setAttributes(p_thanks, { id: 'thanks', hidden: 'true' })
	p_thanks.textContent = 'Wysłano!'
	form.append(p_thanks)

	// function submitForm(event) {
	// 	alert(event.target.elements.input.value)
	// 	return false
	// }

	const get_form = document.getElementById('form')
	const get_error = document.getElementById('error')
	const get_bank = document.getElementById('credit_sum')
	const thanks = document.getElementById('thanks')

	//	credit_sum.oninvalid = invalid
	form.onsubmit = submit

	// function invalid(event) {
	// empty_field.removeAttribute('hidden')
	// }

	function submit(event) {
		form.setAttribute('hidden', '')
		p_thanks.removeAttribute('hidden')
		//alert('wywyw')

		// For this example, don't actually submit the form
		event.preventDefault()
	}

	article.append(form)
	section.append(article)

	// form.onsubmit = async e => {
	// 	e.preventDefault()

	// 	let response = await fetch('/article/formdata/post/user', {
	// 		method: 'POST',
	// 		body: new FormData(form),
	// 	})

	// 	let result = await response.json()

	// 	alert(result.message)
	// }

	return section
}
