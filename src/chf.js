import './chf.scss'
import { Navigation } from './navigation/Navigation'
import { Home } from './views/Home'
//import { toggleMenu } from './navigation/HamburgerNav'

const nav = document.querySelector('nav')

//nav.append(toggleMenu())
nav.append(Navigation())

//hamburger menu toggle
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll('.menuItem')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.closeIcon')
const menuIcon = document.querySelector('.menuIcon')

closeIcon.style.display = 'none'
function toggleMenu() {
	if (menu.classList.contains('showMenu')) {
		menu.classList.remove('showMenu')
		closeIcon.style.display = 'none'
		menuIcon.style.display = 'block'
	} else {
		menu.classList.add('showMenu')
		closeIcon.style.display = 'block'
		menuIcon.style.display = 'none'
	}
}
menuItems.forEach(function (menuItem) {
	console.log(menuItem)
	menuItem.addEventListener('click', toggleMenu)
})
hamburger.addEventListener('click', toggleMenu)


//Start view

const main = document.querySelector('main')
main.append(Home())
document.body.addEventListener('navigate', event => {
	const { detail: Component } = event

	main.innerHTML = ''

	// wstawiamy widok DO elementu main
	main.append(Component())
})
