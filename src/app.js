const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Mr. Robot'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mr. Robot'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        helpText: 'This is a sample help message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 50,
        location: 'Philadelphia'
    })
})

app.get('/')
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
