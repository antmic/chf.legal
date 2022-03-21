import { Post } from './Post';
export function Posts() {
    const section = document.createElement('section');
    
    section.innerHTML = `
        <header><h2>Blog</h2></header>
        <p id="loading">Loading...</p>
    `;

    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(posts => {
            const ul = document.createElement('ul');
            const lis = posts.map(post => Post(post));

            ul.append(...lis);

            section.querySelector('#loading').remove();
            section.append(ul);

        });

    return section;
}
