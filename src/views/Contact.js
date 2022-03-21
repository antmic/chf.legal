export function Contact() {
	const section = document.createElement('section')
	section.innerHTML = `
        <header><h2>Kontakt</h2></header>
			<article class="contact">
				<h5>Skontaktuj się ze mną przez formularz</h5>

					<form action="https://formspree.io/f/mvodnkvk" method="POST">
						<input class="form-control" type="text" name="name" placeholder="Imię i nazwisko">
                        <input class="form-control" type="email" name="_replyto" placeholder="Adres e-mail">
                        <textarea rows="8" class="form-control" name="message" placeholder="Wiadomość"></textarea>
					    <input class="btn btn-success form-control" type="submit" value="Wyślij">
					</form>

				<h5>albo wyślij e-maila na adres <a href="mailto:kontakt@chf.legal">kontakt@chf.legal</a> lub zadzwoń pod numer <a href="tel:+48791028187"> 791 028 187 </a>.</h5>
            </article>
        `
	return section
}
