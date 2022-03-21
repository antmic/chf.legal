import { BackButton } from '../common/BackButton'
import { Posts } from './Posts'

export function PostDetails(id) {
	const section = document.createElement('section')

	section.innerHTML = `
        <p id="loading">Loading...</p>
    `

	fetch(`http://localhost:3000/posts/${id}`)
		.then(response => response.json())
		.then(post => {
			const { id, title, lead, text } = post

			const article = document.createElement('article')

			article.innerHTML = `
                <h3>${title}</h3>

                <h4>${lead}</h4>
                <p>${text}</p>

            `
			section.querySelector('#loading').remove()
			section.append(article, BackButton(Posts))
		})

	return section
}
