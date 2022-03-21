import { getRate } from './getRate.js'
import { getEqual } from './getEqual.js'
import { getLibor } from './getLibor.js'
import { getInstDates } from './getInstDates.js'
import { getLiborList } from './getLiborList.js'
import { getInterests } from './getInterest.js'

//TODO: zamiast zmiennych będą dane zaciągnięte z formularza
const bank = 'bank x' //from bank_name
const creditSum = '100000' //from credit_sum
const creditDate = '2005-01-01' //from credit_date
const creditMargin = 4 //from credit_margin
const instDate = '2021-02' //from payment_date
const instNumb = '360' //from number_of_payments
//const paidEarly = False //from if_early_paid 1-2 radio
//const instEqual = True //from installment_equal installment_decreasing radio

//TODO: zaciągnięte z pliku w zalezności od wybranego banku (dla kazdego miesiaca lub roku osobno)
const sellSpread = 3
const buySpread = -3

//LIBOR CHF zaciągnięty z getLibor
//const LIBOR = getLibor(instDate)
//console.log(LIBOR)

//get list of installments dates
const instDates = getInstDates(instDate)
//export {instDates}
//console.log(instDates)

//API rates
const rateData = await getRate(creditDate)
const rate = rateData.rates.PLN
//console.log(rate)

//equal installments
const equalRate = getEqual(creditSum, creditMargin, instNumb)
//console.log(equalRate)

//list of libor for every installment
const liborList = getLiborList(instDates)
//console.log(liborList)


const interestList = getInterests(liborList, creditMargin)
//console.log(interestList)
