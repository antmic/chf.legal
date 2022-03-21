
import './chf.scss'
import { Navigation } from './navigation/Navigation'
import { CalculatorForm } from './views/CalculatorForm'
import { Home } from './views/Home'


const nav = document.querySelector('nav')

nav.append(Navigation())

const main = document.querySelector('main')

// wstawiamy nawigacje PRZED element main
//main.before(Navigation())

// na start wstawiamy widok
//main.append(Home())
main.append(CalculatorForm())
document.body.addEventListener('navigate', event => {
	const { detail: Component } = event

	main.innerHTML = ''

	// wstawiamy widok DO elementu main
	main.append(Component())
})
