console.log('Client side JavaScript file loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', e => {
    e.preventDefault()
    const address = search.value

    fetch('http://localhost:3000/weather?address=' + address).then(response => {
        response.json().then(data => {
            if (data.error) {
                return console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})
