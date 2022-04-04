export function Home() {
	const section = document.createElement('section')
	section.innerHTML = `
        <header>
            <h1>CHF.LEGAL</h1>
            <h1>kancelaria frankowa</h1>
        </header>
        <article>W mojej kancelarii adwokackiej CHF.LEGAL zajmuję się reprezentowaniem frankowiczów w sprawach przeciwko bankom. 
        <br><br>
        Specjalizuję się w "unieważnianiu" umów kredytowych indeksowanych i denominowanych kursem franka szwajcarskiego. Jest to najkorzystniejsze rozwiązanie dla Klientów, które gwarantuje odzyskanie całości wpłaconych pieniędzy. 
        <br><br>
        W odróżnieniu od kancelarii odszkodowawczych masowo "przerabiających" takie sprawy, zawsze podchodzę indywidualnie do każdego Klienta i zapewniam najwyższą staranność przy świadczeniu usług. Oferuję także korzystne i proste sposoby rozliczenia, bez ukrytych opłat i prowizji. 
        <br><br>
        Zapraszam do kontaktu!
        </article>
    `

	return section
}
