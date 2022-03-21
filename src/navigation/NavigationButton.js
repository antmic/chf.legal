

export function NavigationButton(Component, text) {
    const button = document.createElement('button');
    
    button.classList.add('btn', 'nav-btn')
    button.setAttribute('type', 'button');
    button.innerText = text;

    button.addEventListener('click', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: Component
        });

        document.body.dispatchEvent(navigateEvent);

        // usuwamy klasę `active-btn` ze wszystkich guzikow w menu
        Array.from(button.parentElement.children).forEach(element => {
            element.classList.remove('active-btn');
        });

        // nadajemy klasę `active-btn` na klikniety guzik
        button.classList.add('active-btn');
    });

    return button;
}
