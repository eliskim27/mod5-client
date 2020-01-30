// urls
const bigsURL = `http://localhost:3000/api/v1/bigs`
const littlesURL = `http://localhost:3000/api/v1/littles`

// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

// GET /bigs
export const fetchBigs = () => fetch(bigsURL)
.then(parseData)
.catch(catchError)

// GET /littles
export const fetchLittles = () => fetch(littlesURL)
.then(parseData)
.catch(catchError)