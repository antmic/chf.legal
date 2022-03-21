import { PostDetails } from './PostDetails'

function SeeMoreButton(id) {
	const button = document.createElement('button')
    button.classList.add('readMoreBtn','btn')
	button.setAttribute('type', 'button')
	button.innerText = 'Czytaj dalej'

	const navigateEvent = new CustomEvent('navigate', {
		detail: () => PostDetails(id),
	})

	button.addEventListener('click', () => {
		document.body.dispatchEvent(navigateEvent)
	})

	return button
}

export function Post(post) {
	const { id, title, lead } = post
	const li = document.createElement('li')

	li.innerHTML = `
        <h4 class="postTitle">${title}</h4>
        <p class="postLead">${lead}</p>
    `

	li.append(SeeMoreButton(id))

	return li
}
