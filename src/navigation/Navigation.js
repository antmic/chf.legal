import { Posts } from '../views/Posts'
import { NavigationButton } from './NavigationButton'
import { Home } from '../views/Home'
import { About } from '../views/About'
import { Offer } from '../views/Offer'
import { Contact } from '../views/Contact'
import { CalculatorForm } from '../views/CalculatorForm'
import './../chf.scss'

// tablica zawiera elementy menu do pokazania na stronie
const navigationItems = [
	//      jaki widok, tekst na guziku
	{ component: Home, name: 'Strona główna' },
	{ component: About, name: 'O mnie' },
	{ component: Offer, name: 'Oferta' },
	{ component: Contact, name: 'Kontakt' },
	{ component: CalculatorForm, name: 'Kalkulator' },
	{ component: Posts, name: 'Blog' },
]

export function Navigation() {
	const menu = document.createElement('menu')

	menu.classList.add('menu')

	const navigationButtons = navigationItems.map(item => {
		const { component, name } = item
		//                     jaki widok, tekst na guziku
		return NavigationButton(component, name)
	})

	// na start, ustawiamy klasę `active-btn` na pierwszym guziku
	navigationButtons[0].classList.add('active-btn')

	menu.append(...navigationButtons)




	return menu
}
