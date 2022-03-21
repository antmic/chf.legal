export function getEqual(creditSum, interest, instNumb) {
    const N = creditSum
    const r = interest //list of libor+margin
    const k = 12
    const n = instNumb
    let I = 0
    let denominator = 0

    for ( let i = 1; i <= n; i++ ){
        denominator += (1 + (r/k))**(-i)
    }
    I = (N/denominator).toFixed(2)
    return I
}