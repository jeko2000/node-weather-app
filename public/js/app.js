console.log('Client side JavaScript file loaded')

var address = 'Boston';

fetch('http://localhost:3000/weather?address=' + address).then(response => {
    response.json().then(data => {
        if (data.error) {
            return console.log(data.error);
        }
        console.log(data);
    });
})
